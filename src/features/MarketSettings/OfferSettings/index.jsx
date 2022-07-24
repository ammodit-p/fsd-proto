import React, { useState, useEffect } from 'react'
import {Market} from '../../../enities'
import {UI} from '../../../shared'

export const OfferSettings = () => {
    const market = Market.useMarket()
    const [selectedProduct, setSelectedProduct] = useState(market?.products[0])
    const getCurrentOffer = () => market.getOfferById(selectedProduct?.offerId)
    const [curentOffer, setCurrentOffer] = useState(getCurrentOffer())

    useEffect(() => {
        setSelectedProduct(market?.products[0])
        setCurrentOffer(getCurrentOffer())
    }, [market?.products[0], selectedProduct])

    const handleSelectProduct = (id) => setSelectedProduct(market.getProductById(id))

    const handleEditOffer = ({target: {value}}) => setCurrentOffer(state => ({...state, offerType: value}))

    const handleSaveOffer = ()=> {
        market.editOffer(curentOffer)}

    if (market.isLoading) {
        return <p>Loading....</p>
    }
    
    return (
        <div style={{
            width: 650,
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: 20
        }}>
                <UI.Input label=" Способ оформления" value={curentOffer?.offerType} onChange={handleEditOffer} onBlur={handleSaveOffer} />
            <fieldset style={{
                display: 'flex',
                gap: 5,
                width: '100%',
                alignItems: 'center'
            }}>
                {market.products.map(({id, name}) =><label key={id}>{name}<input checked={selectedProduct?.id === id} type="radio" onChange={() => handleSelectProduct(id)}></input></label> )}
            </fieldset>
   
        </div>
    )
}