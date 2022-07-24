import { useState } from 'react'
import { useDispatch, batch } from 'react-redux'
import {Market} from '../enities'
import {useEffect} from 'react'
import {ProductsList} from '../enities'

export const useCoreProcess = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log('im in use effect')
        setIsLoading(true)
        dispatch(Market.MarketOperations.getMarket())
        .then(() => {
            setIsLoading(false)})

        dispatch(ProductsList.ProductsListOperations.getProductList())
    }, [])
}