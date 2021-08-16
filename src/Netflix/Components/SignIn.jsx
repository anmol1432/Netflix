import React, { useState, useContext } from 'react'
import Netflix from "../Assets/netflix.svg"
import Button from "./Button";
import Material_Input from './Material_Input';
import { Google } from 'react-bootstrap-icons';
import { NavLink } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { auth } from '../../firebase'
import firebase from 'firebase';


const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

}
const SignIn = () => {
    // Hooks are start
    const [input, setinput] = useState({
        Email: null,
        Password: null
    })
    // handling input events
    const inputEvent = (event) => {
        let { name, value } = event.target;
        setinput({
            ...input,
            [name]: value
        })
    }
    const signingIn = () => {
        if (input.Email != null && input.Password != null) {
            auth.signInWithEmailAndPassword(input.Email, input.Password)
                .then((userCredential) => {
                    var user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                })

        }
        else {
            alert('Please make sure the input fields are not empty or email is valid')
        }
    }
    return (
        <>
            <div className="LoginSignIn mt-lg-4">
                <main className="form-signin text-center  mt-lg-4">
                    <form className=" m-auto text-center" onSubmit={(event) => event.preventDefault()}>
                        <img className="mb-0" src={Netflix} alt="" width="300" height="160" />
                        <h1 className="h3 mb-5 fw-normal loginHeading text-capitalize">New Here ?
                            <NavLink exact className="signup" to="/signup">
                                signup
                            </NavLink>
                        </h1>
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
                                name={<Google color="red" className="" />}
                                onClick={googleSignIn}
                                AddClass="btn btn-outline-light text-capitalize  directSignIn p-1"
                            />
                            <Button
                                name="Sign in"
                                onClick={signingIn}
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