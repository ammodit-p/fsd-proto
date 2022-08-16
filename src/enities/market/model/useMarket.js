import {useSelector, useDispatch} from 'react-redux'
import {MarketSelectors} from './selectors'
import {MarketActions} from '.'
import {MarketOperations} from './thunks'
import {hasProductsSameOffer} from '../utils'
import {useEventBus, DataReceiveMessages} from '../../../shared'
import { useEffect } from 'react'

export const useMarket = () => {
    const dispatch = useDispatch()
    const {subscribe} = useEventBus()
    const offers = useSelector(MarketSelectors.getOffers)
    const products = useSelector(MarketSelectors.getProducts)
    const isLoading = useSelector(MarketSelectors.getStatus) === 'loading'
    const isError = useSelector(MarketSelectors.getStatus) === 'error'


    const dispatchProductsToStore = (products) => dispatch(MarketActions.setProducts(products))
    const dispatchOffersToStore = (offers) => dispatch(MarketActions.setOffers(offers))
    const dipatchGetMarket = () => dispatch(MarketOperations.getMarket())

    useEffect(() => {
        const dataReceiveListener = subscribe(DataReceiveMessages.getConfigData, dipatchGetMarket)
        setSubscribed(true)
        return () => {
            dataReceiveListener.unsubscribe()
        }
    }, [])

    const getProductById = (id) => products.find(item => item.id === id)
    const getOfferById = (id) => offers.find(item => item.id === id)

    const editProduct = (product) => {

       const productIndex = products.findIndex(item => product.id === item.id)
        if (productIndex === -1) {
            /** тут может быть ошибка которую обработает фича, например */
            return
        }

       const updatedProducts =  [...products]
       updatedProducts[productIndex] = product
       dispatchProductsToStore(updatedProducts)
    }

    const deleteProduct = (product) => {
        const updatedProducts = [...products].filter(item => item.id !== product.id)
        dispatchProductsToStore(updatedProducts)

        const hasSameOffer = hasProductsSameOffer(product.offerId, updatedProducts)

        if (!hasSameOffer && offers.length > 1) {
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

        if (offerIndex === -1) {
            return
        }

        const updatedOffers = [...offers]
        updatedOffers[offerIndex] = offer
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
        products,
        isLoading,
        isError
    }
}