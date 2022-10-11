import {createEffect} from 'effector-logger'
import {productsApi} from '../../../shared'

export const getProductList = createEffect(
    async () => {
        const products = await productsApi.getProductsList()
        return products
    }
)