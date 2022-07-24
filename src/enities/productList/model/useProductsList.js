import {useSelector, useDispatch} from 'react-redux'

import {ProductsListSelectors} from './selectors'

export const useProductsList = () => {
    const productList = useSelector(ProductsListSelectors.getProductsList)

    const getProductById = (id) => productList.find(item => item.id === id)

    return {
        productList,
        getProductById
    }
}