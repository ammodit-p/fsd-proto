import {createSelector} from '@reduxjs/toolkit'

    const getProductsListSlice = state => state?.productList

    const getProductsList = createSelector(getProductsListSlice, state => state?.products)
    
    const getStatus = createSelector(getProductsListSlice, state => state.status)

    export const ProductsListSelectors = {
        getProductsList,
        getStatus
    }