import React, { useState } from 'react'
import Netflix from "../Assets/netflix.svg"
import Button from "./Button";
import { Person } from 'react-bootstrap-icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Material_Input from './Material_Input';
import { auth } from '../../firebase'
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


function Signup() {
    // Hooks are start
    const [input, setinput] = useState({
        UserName: null,
        Email: null,
        Password: null
    })
    const history = useHistory();
    // handling input events
    const inputEvent = (event) => {
        let { name, value } = event.target;
        setinput({
            ...input,
            [name]: value
        })
    }
    // createuser with firebase sdk
    const createUser = () => {
        if (input.Username != null || input.Email != null && input.Password != null) {
            auth.createUserWithEmailAndPassword(input.Email, input.Password)
                .then((userCredential) => {
                    let user = userCredential.user;
                })
                .then(() => {
                    history.goBack()
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    }
                    if (errorCode == 'auth/invalid-email') {
                        alert('invalid-email');
                    }
                    else {
                        alert(errorMessage);
                    }
                    console.log(error);
                    console.log(errorCode, ' ', errorMessage);
                })
        }
        else {
            alert('Please make sure the input fields are not empty or email is valid and password is strong')
        }
    }

    return (
        <>
            <div className="LoginSignIn mt-lg-4">
                <main className="form-signin text-center  mt-lg-4">
                    <form className=" m-auto text-center" onSubmit={(event) => event.preventDefault()}>
                        <img className="mb-0" src={Netflix} alt="" width="300" height="160" />
                        <h1 className="h3 mb-5 fw-normal loginHeading text-capitalize">
                            signup
                            </h1>
                        <Material_Input
                            icon={<Person className="AccountCircle" />}
                            label="UserName"
                            onChange={inputEvent}
                            name="UserName"
                            value={input.Username}
                        />
                        <Material_Input
                            icon={<AccountCircle className="AccountCircle" />}
                            label="Email"
                            onChange={inputEvent}
                            name="Email"
                            value={input.Email}
                        />
                        <Material_Input
                            icon={<LockOpenIcon className="LockOpenIcon" />}
                            label="Password"
                            onChange={inputEvent}
                            name="Password"
                            value={input.Password}
                        />
                        <div className="btn-container ">
                            <Button
                                name="Sign Up"
                                AddClass="btn btn-outline-light text-capitalize create-account px-4 mt-4 mb-4"
                                onClick={createUser}
                            />
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Signup;
