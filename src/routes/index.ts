import {createBrowserRouter} from "react-router";
import ReduxRoutes from "../Features/redux/routes";
import ContextRoutes from "../Features/context/routes";
import ZustandRoutes from "../Features/zustand/routes";

/**
 * APPLICATION ROUTES
 */
const ApplicationRoutes = createBrowserRouter([
    ...ReduxRoutes,
    ...ContextRoutes,
    ...ZustandRoutes
])

export default ApplicationRoutes;