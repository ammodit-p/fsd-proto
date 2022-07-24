import { createSlice } from '@reduxjs/toolkit'
import {getProductList} from './thunks'

const initialState = {
    products: [],
    status: 'idle'
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
        slice.addCase(getProductList.fulfilled, (state,action) => {
            state.products = action.payload
            state.status = 'success'
        })
        slice.addCase(getProductList.pending, (state) => {
            state.status = 'loading'
        })
    }
})

export const ProductListActions = productListSlice.actions

export const ProductListReducer = productListSlice.reducer

export const ProductsListOperations = {
    getProductList
}