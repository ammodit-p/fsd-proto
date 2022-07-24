import {createAsyncThunk} from '@reduxjs/toolkit'
import {productsApi} from '../../../shared'

export const getProductList = createAsyncThunk(
    'productList/getProductList',
    async () => {
        const products = await productsApi.getProductList()
        return products
    }
)