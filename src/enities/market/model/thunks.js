import {createAsyncThunk} from '@reduxjs/toolkit'
import {configApi} from '../../../shared'


export const getMarket = createAsyncThunk(
    'market/getMarket',
    async () => {
       try {
        const offers = await configApi.getOffers()
        const products = await configApi.getProducts()
        
        return {offers, products}
       } catch (e) {
           console.log('thunk catch error', e)
           throw e
       }
    }
)

export const MarketOperations = {
    getMarket
}