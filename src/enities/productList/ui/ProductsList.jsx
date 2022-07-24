import React, { useState } from 'react'

import {Input} from '../../../shared'
import {useProductsList} from '../model/useProductsList'

export const ProductsList = () => {
    const {productsList} = useProductsList()
    const [searchedProducts, setSearchedProducts] = useState()

    const handleSearch = ({target: {value}}) => {
        
    }
}