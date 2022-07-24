import React from 'react'

import {Market, ProductsList} from '../../../enities'

export const ProductItem = ({product}) => {
  const market = Market.useMarket()

  const isProductInConfig = Boolean(market.getProductById(product.id))


  const handleToggleProduct = ({target: {checked}}) => {
      if (checked) {
        market.addProduct(product)
      } 
      if(!checked) {
        market.deleteProduct(product)
      }
  }

  return <div style={{
      width: 400,
      height: 150,
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