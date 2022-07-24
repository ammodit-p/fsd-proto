import {useSelector, useDispatch} from 'react-redux'
import {MarketSelectors} from './selectors'
import {MarketActions} from '.'
import {hasProductsSameOffer} from '../utils'

export const useMarket = () => {
    const dispatch = useDispatch()
    const offers = useSelector(MarketSelectors.getOffers)
    const products = useSelector(MarketSelectors.getProducts)

    const dispatchProductsToStore = (products) => dispatch(MarketActions.setProducts(products))
    const dispatchOffersToStore = (offers) => dispatch(MarketActions.setProducts(offers))

    const getProductById = (id) => products.find(item => item.id === id)
    const getOfferById = (id) => offers.find(item => item.id === id)

    const editProduct = (product) => {

       const productIndex = products.findIndex(item => product.id === item.id)
        if (productIndex === -1) {
            /** тут может быть ошибка которую обработает фича, например */
            return
        }

       const updatedProducts =  [...products].splice(productIndex, 1, product)
       dispatchProductsToStore(updatedProducts)
    }

    const deleteProduct = (product) => {
        const updatedProducts = [...products].filter(item => item.id !== product.id)
        dispatchProductsToStore(updatedProducts)

        const hasSameOffer = hasProductsSameOffer(product.id, updatedProducts)

        if (!hasSameOffer) {
            const updatedOffers = offers.filter(item => item.id !== product.offerId)
            dispatchOffersToStore(updatedOffers)
        }
    }

    const addProduct = (product) => {
        const updatedProducts = [...products, {...product, offerId: offers[0].id}]
        dispatchProductsToStore(updatedProducts)
    }

    const editOffer = (offer) => {
        const offerIndex = offers.findIndex(item => item.id === offer.id)

        if (!offerIndex) {
            return
        }

        const updatedOffers = [...offers].splice(offerIndex, 1, offer)
        dispatchOffersToStore(updatedOffers)
    }

    const deleteOffer = (offer) => {
        const updatedOffers = offers.filter(item => item.id !== offer.id)
        dispatchOffersToStore(updatedOffers)
    }

    const addOffer = (offer) => {
        const updatedOffers = [...offers, offer]
        dispatchOffersToStore(updatedOffers)
    }


    return {
        getProductById,
        getOfferById,
        editProduct,
        deleteProduct,
        addProduct,
        editOffer,
        addOffer,
        offers,
        products
    }
}