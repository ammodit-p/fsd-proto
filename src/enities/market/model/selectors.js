import {createSelector} from '@reduxjs/toolkit'

const getMarketSlice = createSelector(state => state?.market)

const getProducts  = createSelector(getMarketSlice, (state) => state?.products)

const getOffers = createSelector(getMarketSlice, (state) => state?.offers)

export const MarketSelectors = {
    getProducts,
    getOffers
}