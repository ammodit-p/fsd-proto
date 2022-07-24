import {useSelector} from 'react-redux'

import {ProductsListSelectors} from './selectors'

export const useProductsList = () => {
    const productList = useSelector(ProductsListSelectors.getProductsList)
    const isLoading = useSelector(ProductsListSelectors.getStatus) === 'loading'

    const getProductById = (id) => productList.find(item => item.id === id)

    return {
        productList,
        getProductById,
        isLoading
    }
}