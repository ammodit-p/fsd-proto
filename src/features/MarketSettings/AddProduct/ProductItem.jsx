import React from 'react'

import {Market} from '../../../enities'

export const ProductItem = ({product}) => {

  const isProductInConfig = false


  const handleToggleProduct = ({target: {checked}}) => {
      if (checked) {
        Market.addProduct(product)
      } 
      if(!checked) {
        Market.deleteProduct(product)
      }
  }

  return <div className="ProductItem" style={{
      width: 150,
      height: 50,
      border: '1px solid #eee',
      borderRadius: 12
  }}>
    <label style={{
      display: 'flex',
      gap: 5
    }}>
    <input type="checkbox" checked={isProductInConfig} onChange={handleToggleProduct}></input>
    {product.name}
    </label>
  </div>

}