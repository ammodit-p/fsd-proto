import React, { useState } from 'react'
import {Market, ProductsList} from '../../../enities'
import {UI} from '../../../shared/ui'
import {ProductItem} from './ProductItem'


export const AddProduct = () => {
    const {productsList} = ProductsList.useProductsList()
    const [filteredProducts, setFilteredProducts] = useState(productsList)

    const handleFilterProducts = ({target: {value}}) => {
        setFilteredProducts([...productsList].filter(item => item.name.includes(value.toLowerCase())))
    }

    return (
        <div style={{
            width: 650,
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            overflow: 'scroll'
        }}>
            <UI.Input label="Поиск"  value='' onChange={handleFilterProducts} />
            {filteredProducts?.map((product) => <ProductItem  key={product.id} product={product} />)}
        </div>
    )
}