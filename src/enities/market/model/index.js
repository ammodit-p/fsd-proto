// eslint-disable-file
import { createSlice } from '@reduxjs/toolkit'
import {getProducts, getOffers, getMarket} from './thunks'

const initialState = {
    offers: [],
    products: [],
}

 const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        setState: (state, action) => {
            state = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setOffers: (state, action) => {
            state.offers = action.payload 
        }
    },
    extraReducers: (slice) => {
        slice.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        }),
        slice.addCase(getOffers.fulfilled, (state, action) => {
            state.offers = action.payload
        }),
        slice.addCase(getMarket.fulfilled, (state, action) => {
            console.log('getMarket in store', action.payload)
            state = action.payload
        })
    }
})

export const MarketActions = marketSlice.actions

export const MarketReducer = marketSlice.reducer

export const MarketOperations = {
    getProducts,
    getOffers,
    getMarket
}