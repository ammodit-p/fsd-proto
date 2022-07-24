import {createSelector} from '@reduxjs/toolkit'

const getMarketSlice = (state) => {
    return state?.market
}

const getProducts  = createSelector(getMarketSlice, (state) => state?.products ?? [])

const getOffers = createSelector(getMarketSlice, (state) => state?.offers ?? [])

const getStatus = createSelector(getMarketSlice, state => state.status)

export const MarketSelectors = {
    getProducts,
    getOffers,
    getStatus
}