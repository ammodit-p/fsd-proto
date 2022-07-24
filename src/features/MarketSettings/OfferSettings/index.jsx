import React, { useState } from 'react'
import {Market} from '../../../enities'
import {UI} from '../../../shared'

export const OfferSettings = () => {
    const market = Market.useMarket()
    const [selectedProductId, setSelectedProductId] = useState(market.products[0].id)
    const getCurrentOffer = () => market.getOfferById(selectedProductId)
    const [curentOffer, setCurrentOffer] = useState(getCurrentOffer())

    const handleSelectProduct = (id) => setSelectedProductId(id)

    const handleEditOffer = (value) => setCurrentOffer(state => ({...state, offerType: value}))

    const handleSaveOffer = ()=> market.editOffer(curentOffer)

    return (
        <div style={{
            width: 650,
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: 20
        }}>
                <UI.Input label=" Способ оформления" value={curentOffer.offerType} onChange={handleEditOffer} onBlur={handleSaveOffer} />
            <fieldset style={{
                display: 'flex',
                gap: 5,
                width: '100%',
                alignItems: 'center'
            }}>
                {market.products.map(({id, name}) =><label key={id}>{name}<input type="radio" onChange={() => handleSelectProduct(id)}></input></label> )}
            </fieldset>
   
        </div>
    )
}