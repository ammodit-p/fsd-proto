import { BrowserRouter } from "react-router-dom"

export const withRouter = (Component) => () => (
    <BrowserRouter>
         <Component />
    </BrowserRouter>
)