import React from 'react'
import {Market} from '../../../enities'
import {ProductCard} from './ProductCard.jsx'


export const ProductSettings = () => {
    const {products, isLoading} = Market.useMarket()

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