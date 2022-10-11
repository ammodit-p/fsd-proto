import { BrowserRouter } from "react-router-dom"

export const withRouter = (Component) => () => {
    console.log('ROUTER')
    return (
    <BrowserRouter>
         <Component />
    </BrowserRouter>
)}