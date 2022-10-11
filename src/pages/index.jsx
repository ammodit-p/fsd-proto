import { Route, Routes, Navigate } from "react-router-dom"

import {OfferSettingsPage} from './OfferSettings'
import {ProductsPage} from './Products'

const ROUTES = {
    offers: '/offers',
    home: '/'
}

export const Routing = () => {
    return (
        <Routes>
            <Route exact path={ROUTES.home} element={<ProductsPage />} />
            <Route exact path={ROUTES.offers} element={<OfferSettingsPage />} />
        </Routes>
    )
}