import { useEffect } from 'react'
import * as Entities from '../enities'
import {configApi} from '../shared'
import { useLocation } from 'react-router-dom'
import {ReceiveDataEvents} from '../shared'

/** Это слой с самой верхнеуровненой БЛ, выше только инициализация приложения */

export const useProcess = () => {
    
/** А вот тут у нас странный дефект. флаг needSaveProject внутри хука обновляется, а тут нет.
 * В целом наверное можно вытащить его и в мини-стор, ну либо ковырятся с тем что реакт такого делает что тут 
 * не меняется состояние флага и ломается логика
 */
    const {needSaveProject, setSavedProject} = Entities.Save.useSaveProject()
    const products = Entities.Market.useProducts()
    const offers = Entities.Market.useOffers()

    const location = useLocation()

    useEffect(()=> {
        ReceiveDataEvents.receiveConfigData()
    }, [])

    // useEffect(() => {
    //     if (isError) {
    //         alert('ERROR')
    //     }
    // }, [isError])

    useEffect(() => {
        
/** Данные по списку доступных продуктов нам нужны только на одной из страниц, этот слой знает где и запрашивает 
 * данные только там где они нужны
*/
        if (!location.pathname.includes('offers')) {
            console.log('i need receive profucts list')
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