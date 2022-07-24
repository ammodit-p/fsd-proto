import React from 'react'
import {
    ProductSettings,
    AddProduct
} from '../../features'

export const ProductsPage = () => (
    <div style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 30
    }}>
        <AddProduct />
        <ProductSettings />
    </div>
)