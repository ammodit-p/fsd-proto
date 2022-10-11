import compose from "compose-function";
import { withRouter } from "./routing/withRouter";

export const withProviders = compose(withRouter);