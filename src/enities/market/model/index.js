// eslint-disable-file
import { createSlice } from '@reduxjs/toolkit'
import {getMarket} from './thunks'

const initialState = {
    offers: [],
    products: [],
    status: 'idle'
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
        slice.addCase(getMarket.fulfilled, (state, action) => {
            state.offers = action.payload.offers
            state.products = action.payload.products
            state.status = 'success'
        })
        slice.addCase(getMarket.pending, (state) => {
            state.status = 'loading'
        })
        slice.addCase(getMarket.rejected, (state) => {
            state.status = 'error'
        })
    }
})

export const MarketActions = marketSlice.actions

export const MarketReducer = marketSlice.reducer

