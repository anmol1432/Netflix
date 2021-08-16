import React, { useContext } from "react"
import { Route, Redirect, useHistory } from "react-router-dom"
import { AuthContext } from "./../../NetflixApp";

export const PrivateRoute = ({ path, Component }) => {
    // const authentication = true
    const history = useHistory()
    const authentication = useContext(AuthContext)
    return (<Route
        exact
        path={path}
        render={() => {
            if (authentication) {
                return <Component />
            }
            history.push('/login')
        }}
    />)
};

export default PrivateRoute;
