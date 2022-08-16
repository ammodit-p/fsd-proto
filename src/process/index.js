import { useEffect } from 'react'
import * as Entities from '../enities'
import {configApi} from '../shared'
import { useDispatch } from 'react-redux'
import {ProductsList} from '../enities'
import { useLocation } from 'react-router-dom'
import {useEventBus, DataReceiveMessages} from '../shared'

/** Это слой с самой верхнеуровненой БЛ, выше только инициализация приложения */

export const useProcess = () => {
    
/** А вот тут у нас странный дефект. флаг needSaveProject внутри хука обновляется, а тут нет.
 * В целом наверное можно вытащить его и в мини-стор, ну либо ковырятся с тем что реакт такого делает что тут 
 * не меняется состояние флага и ломается логика
 */
    const {needSaveProject, setSavedProject} = Entities.Save.useSaveProject()
    const {products, offers, isError} = Entities.Market.useMarket()

    const dispatch = useDispatch()
    const {publish} = useEventBus()
    const location = useLocation()

    useEffect(()=> {
        publish({topic: DataReceiveMessages.getConfigData})
    }, [])

    useEffect(() => {
        if (isError) {
            alert('ERROR')
        }
    }, [isError])

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
        setSavedProject()
    }

    useEffect( () => {
/** Получаем триггер того что приложение хочет сохраниться и запускаем процесс */
        if (needSaveProject) {
            save()
        }
    }, [needSaveProject])
}