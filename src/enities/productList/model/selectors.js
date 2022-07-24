import {createSelector} from '@reduxjs/toolkit'

    const getProductsListSlice = createSelector(state => state?.productList)

    const getProductsList = createSelector(getProductsListSlice, state => state?.products)

    export const ProductsListSelectors = {
        getProductsList
    }