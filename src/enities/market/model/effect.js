import {createEffect} from 'effector-logger'
import {configApi} from '../../../shared'


export const getMarket = createEffect(
    async () => {
        const offers = await configApi.getOffers()
        const products = await configApi.getProducts()
        
        return {offers, products}
    }
)

export const MarketOperations = {
    getMarket
}