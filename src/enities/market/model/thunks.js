import {createAsyncThunk} from '@reduxjs/toolkit'
import {configApi} from '../../../shared'

export const getProducts = createAsyncThunk(
    'market/getProducts',
    async () => {
        console.log('getProducts thunk')
        const products = await configApi.getProducts()
        return products
    }
)

export const getOffers = createAsyncThunk(
    'market/getOffers',
    async () => {
        console.log('getOffers thunk')
        const offers = await configApi.getOffers()
        return offers
    }
)

export const getMarket = createAsyncThunk(
    'market/getMarket',
    async () => {
        console.log('getMarket thunk')
        const offers = await configApi.getOffers()
        const products = await configApi.getProducts()
        return {offers, products}
    }
)