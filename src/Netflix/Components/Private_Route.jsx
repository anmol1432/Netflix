import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "./../../NetflixApp";



export default function Private_Route(props) {
    const flag = useContext(AuthContext)
    return (
        <Route
            render={() => {
                if (flag) {
                    return (props.comp)
                }
                else {
                    return <Redirect to="/login" />
                }
            }}
        ></Route>
    )
}