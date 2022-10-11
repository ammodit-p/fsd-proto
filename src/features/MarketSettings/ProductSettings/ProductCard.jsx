import React, { useEffect, useState } from 'react'
import {Market} from '../../../enities'
import {UI} from '../../../shared'

export const ProductCard = ({product}) => {

    const [currentProduct, setCurrenetProduct] = useState(product)

    useEffect(() => {
        setCurrenetProduct(product)
    }, [product])

    const handleEditName = ({target:{value}}) => {
        setCurrenetProduct(state => ({...state, name: value}))
    }

    const handleSaveChanges = () => Market.editProduct(currentProduct)

    const handleDelete = () => Market.deleteProduct(product)

    return (
        <div style={{
            width: '100%',
            height: 'fit-content',
            padding: 20,
            display: 'flex',
            gap: 10,
            alignItems: 'center'
        }}>
            <UI.Button onClick={handleDelete}>Удалить</UI.Button>
            <p>{currentProduct.name}</p>
            <UI.Input label="NAME" value={currentProduct.name} onChange={handleEditName} onBlur={handleSaveChanges} />
        </div>
    )
}