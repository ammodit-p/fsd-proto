import React, { useState, useEffect } from 'react'
import { useStore } from 'effector-react'
import {Market} from '../../../enities'
import {UI} from '../../../shared'

export const OfferSettings = () => {
    const products = Market.useProducts()
    const [selectedProduct, setSelectedProduct] = useState(products[0])
    const offerById = Market.useOffer(selectedProduct?.offerId)
    const [curentOffer, setCurrentOffer] = useState(offerById)
    const isLoading = useStore(Market.isLoading)

    useEffect(() => {
        setSelectedProduct(products[0])
        setCurrentOffer(offerById)
    }, [products, selectedProduct])

    const handleSelectProduct = (id) => setSelectedProduct(products.find(item => item.id === id))

    const handleEditOffer = ({target: {value}}) => setCurrentOffer(state => ({...state, offerType: value}))

    const handleSaveOffer = ()=> {
        Market.editOffer(curentOffer)}

    if (isLoading) {
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
                {products.map(({id, name}) =><label key={id}>{name}<input checked={selectedProduct?.id === id} type="radio" onChange={() => handleSelectProduct(id)}></input></label> )}
            </fieldset>
   
        </div>
    )
}