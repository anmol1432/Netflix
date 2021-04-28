import React from 'react'
import Netflix from "../Assets/netflix.svg"
import Button from "./Button";
import Material_Input from './Material_Input';
import { Google, Facebook } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';


const SignIn = () => {

    return (
        <>
            <div className="LoginSignIn mt-lg-4">
                <main className="form-signin text-center  mt-lg-4">
                    <form className=" m-auto text-center">
                        <img className="mb-0" src={Netflix} alt="" width="300" height="160" />
                        <h1 className="h3 mb-5 fw-normal loginHeading text-capitalize">New Here ?
                             <NavLink exact className="signup" to="/signup">
                                signup
                            </NavLink>
                        </h1>
                        <Material_Input
                            icon={<AccountCircle className="AccountCircle" />}
                            label="Email"
                            onChange=''
                            name="Email"
                        />
                        <Material_Input
                            icon={<LockOpenIcon className="LockOpenIcon" />}
                            label="Password"
                            onChange=''
                            name="Password"
                        />
                        <div className="btn-container ">
                            <Button
                                name={<Google color="red" className="" />}
                                AddClass="btn btn-outline-light text-capitalize  directSignIn p-1"
                            />
                            <Button
                                name={<Facebook color="blue" className="" />}
                                AddClass="btn btn-outline-light text-capitalize directSignIn"
                            />
                            <Button
                                name="Sign in"
                                AddClass="btn btn-outline-light text-capitalize create-account px-4 mt-4 mb-4"
                            />
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default SignIn;