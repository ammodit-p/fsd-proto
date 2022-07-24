import { Route, Switch, Redirect } from "react-router-dom"

import {OfferSettingsPage} from './OfferSettings'
import {ProductsPage} from './Products'

const ROUTES = {
    offers: '/offers',
    home: '/'
}

export const Routing = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.home} component={ProductsPage} />
            <Route exact path={ROUTES.offers} component={OfferSettingsPage} />
            <Redirect to="/" />
        </Switch>
    )
}