import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "./../../NetflixApp";
import { useParams, useLocation, useHistory } from "react-router-dom";


export default function Private_Route({ component: Component, ...rest }) {
    const flag = useContext(AuthContext)
    const history = useHistory();
    console.log(flag, 'hi')
    return (
        <Route
            {...rest}
            render={(props) => {
                if (flag) {
                    return <component {...props} />
                }
                else {
                    return <Redirect to="/login" />
                }
            }}
        ></Route>
    )
}