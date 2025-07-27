import type {RouteObject} from "react-router";
import ZustandHome from "../page";

/**
 * REDUX FEATURE ROUTES
 */
const ZustandRoutes: Array<RouteObject> = [
    {
        path: '/zustand',
        element: <ZustandHome/>
    }
]

export default ZustandRoutes