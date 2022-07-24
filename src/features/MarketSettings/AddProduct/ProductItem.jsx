import React from 'react'

import {Market} from '../../../enities'

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