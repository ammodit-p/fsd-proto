import { Provider } from 'react-redux'
import {store} from './store'

export const withStore = (Component) => () => {
    return (
    <Provider store={store}>
         {<Component />}
    </Provider>
)}