import ReduxHome from "../pages";
import type {RouteObject} from "react-router";

/**
 * REDUX FEATURE ROUTES
 */
const ReduxRoutes:Array<RouteObject> = [
    {
        path:'/redux',
        children:[
            {
                index:true,
                element:<ReduxHome/>
            }
        ]
    }
]

export default ReduxRoutes