// eslint-disable-file
import {getMarket} from './effect'
import {ReceiveDataEvents} from '../../../shared'
import {hasProductsSameOffer} from '../utils'
import {useStore, useStoreMap} from 'effector-react'

import {createStore, createEvent, createApi, forward} from 'effector-logger'


const initialState = {
    offers: [],
    products: [],
}


export const $market = createStore(initialState)
// const setMarket = createEvent()

$market.on(getMarket.doneData, (_, newState) => newState)


forward({
    from: ReceiveDataEvents.receiveConfigData,
    to: getMarket
})

// forward({
//     from: getMarket,
//     to: setMarket
// })


export const marketApi = createApi($market, {
    editProduct: (store, product) => {
        const productIndex = store.products.findIndex(item => product.id === item.id)
        if (productIndex === -1) {
            /** тут может быть ошибка которую обработает фича, например */
            return store
        }

       const updatedProducts =  [...store.products]
       updatedProducts[productIndex] = product
        return {...store, products: updatedProducts}
    },
    deleteProduct: (store, product) => {
        const updatedProducts = [...store.products].filter(item => item.id !== product.id)

        const hasSameOffer = hasProductsSameOffer(product.offerId, updatedProducts)

        let updatedOffers = store.offers

        if (!hasSameOffer && store.offers.length > 1) {
            updatedOffers = store.offers.filter(item => item.id !== product.offerId)
        }

        return {...store, products: updatedProducts, offers: updatedOffers}
    },
    addProduct: (store, product) => {
        const updatedProducts = [...store.products, {...product, offerId: store.offers[0].id}]
        return {...store, products: updatedProducts}
    },
    editOffer: (store, offer) => {
        const offerIndex = store.offers.findIndex(item => item.id === offer.id)

        if (offerIndex === -1) {
            return store
        }

        const updatedOffers = [...store.offers]
        updatedOffers[offerIndex] = offer
        return {...store, offers: updatedOffers}
    },
    addOffer: (store, offer) => {
        const updatedOffers = [...store.offers, offer]
        return {...store, offers: updatedOffers}
    }
})

export const $offers = $market.map(({offers}) => offers)
export const $products = $market.map(({products}) => products)

export const isLoading = getMarket.pending

const useOffers = () => useStore($offers)
const useProducts = () => useStore($products)

const useProduct = (id) => useStoreMap({
    store: $products,
    keys: [id],
    fn: (state, [productId]) => state.find(item => item.id === productId)
})

const useOffer= (id) => useStoreMap({
    store: $offers,
    keys: [id],
    fn: (state, [offerId]) => state.find(item => item.id === offerId)
})


export const selectors = {
    useOffers,
    useProducts,
    useOffer,
    useProduct
}

// {
//     getProductById, - useStoreMap
//     getOfferById, - useStoreMap
//     editProduct,+
//     deleteProduct,+
//     addProduct, +
//     editOffer, +
//     addOffer, +
//     offers,+
//     products,+
//     isLoading, +
//     isError
// }
