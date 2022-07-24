import { createSlice } from '@reduxjs/toolkit'
import {getProductList} from './thunks'

const initialState = {
    products: [],
}

 const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        setState: (state, action) => {
            state = action.payload
        },
    },
    extraReducers: (slice)=> {
        slice.addCase(getProductList, (state,action) => {
            state = action.payload
        })
    }
})

export const ProductListActions = productListSlice.actions

export const ProductListReducer = productListSlice.reducer

export const ProductsListOperations = {
    getProductList
}