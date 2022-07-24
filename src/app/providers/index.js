import compose from "compose-function";
import { withRouter } from "./routing/withRouter";
import {withStore} from './store/withStore'

export const withProviders = compose(withRouter, withStore);