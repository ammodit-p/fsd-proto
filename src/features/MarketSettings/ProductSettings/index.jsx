import React from 'react'
import {Market} from '../../../enities'
import {ProductCard} from './ProductCard.jsx'
import {useStore} from 'effector-react'


export const ProductSettings = () => {
    const products = Market.useProducts()
    const isLoading = useStore(Market.isLoading)
    console.log('products', products)
    

    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div className="ProductSettings" style={{
            width: 650,
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            gap: 12
        }}>
            {products?.map(product => <ProductCard product={product} />)}
        </div>
    )
}