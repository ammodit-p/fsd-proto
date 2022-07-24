import { useEffect } from 'react'
import * as Entities from '../enities'
import {configApi} from '../shared'
import { useDispatch, batch } from 'react-redux'
import {Market} from '../enities'
import {ProductsList} from '../enities'
import { useLocation } from 'react-router-dom'

/** Это слой с самой верхнеуровненой БЛ, выше только инициализация приложения */

export const useProcess = () => {
    
/** А вот тут у нас странный дефект. флаг needSaveProject внутри хука обновляется, а тут нет.
 * В целом наверное можно вытащить его и в мини-стор, ну либо ковырятся с тем что реакт такого делает что тут 
 * не меняется состояние флага и ломается логика
 */
    const {needSaveProject, setSavedProject} = Entities.Save.useSaveProject()
    const {products, offers, isError} = Entities.Market.useMarket()

    const dispatch = useDispatch()
    const location = useLocation()


    useEffect(() => {
/** При загрузке приложения получаем данные из конфига */
        dispatch(Market.MarketOperations.getMarket())
        .catch(e => alert(e))
    
    }, [])

    useEffect(() => {
        if (isError) {
            alert('ERROR')
        }
    })

    useEffect(() => {
        
/** Данные по списку доступных продуктов нам нужны только на одной из страниц, этот слой знает где и запрашивает 
 * данные только там где они нужны
*/
        if (!location.pathname.includes('offers')) {
            dispatch(ProductsList.ProductsListOperations.getProductList())
        }
    }, [location])

    const save = async () => {
        const config = await configApi.getConfig()
        const newConfig = {
            ...config,
            products,
            data: {
                ...config.data,
                market: {
                    ...config.data.market,
                    offers
                }
            }
        }

        await configApi.saveProject(newConfig)
        console.log('hi')
        setSavedProject()
    }

    useEffect( () => {
/** Получаем триггер того что приложение хочет сохраниться и запускаем процесс */
        if (needSaveProject) {
            save()
        }
    }, [needSaveProject])
}