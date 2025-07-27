import React from "react";
import {Outlet} from "react-router";

/**
 * REDUX WRAPPER
 * @constructor
 */
const ReduxLayout: React.FC = ({}) => {
    return (<Outlet/>)
}

export default ReduxLayout