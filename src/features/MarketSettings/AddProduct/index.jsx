import React, { useEffect, useState } from 'react'
import {Market, ProductsList} from '../../../enities'
import {UI} from '../../../shared/ui'
import {ProductItem} from './ProductItem'


export const AddProduct = () => {
    const {productList, isLoading} = ProductsList.useProductsList()
    const [filteredProducts, setFilteredProducts] = useState(productList)

    useEffect(() => setFilteredProducts(productList), [productList])

    const handleFilterProducts = ({target: {value}}) => {
        setFilteredProducts([...productList].filter(item => item.name.includes(value.toLowerCase())))
    }

    if (isLoading) {
        return <p>Loading....</p>
    }

    return (
        <div className="AddProduct" style={{
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