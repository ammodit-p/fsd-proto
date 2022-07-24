import { configureStore } from '@reduxjs/toolkit'
import {Market} from '../../../enities'
import {ProductsList} from '../../../enities'

export const store = configureStore({
    reducer: {
        market: Market.MarketReducer,
        productList: ProductsList.ProductListReducer
    }
})