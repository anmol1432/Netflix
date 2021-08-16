import React, { useState, createContext, useEffect } from 'react'
import Navbar from "./Netflix/Components/Navabar";
import Heading from "./Netflix/Components/Heading";
import CardSection from "./Netflix/Components/CardSection";
import SignIn from "./Netflix/Components/SignIn";
import Signup from "./Netflix/Components/Signup";
import Contact from "./Netflix/Components/Contact";
import Footer from "./Netflix/Components/Footer";
import Privacy from "./Netflix/Components/HelpingComponents/Privacy";
import About from "./Netflix/Components/HelpingComponents/About";
import Main from "./Netflix/Components/Main";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import firebase from 'firebase';
import PrivateRoute from "../src/Netflix/Components/Private_Route";

// css components
import "bootstrap/dist/css/bootstrap.min.css"
import "./Netflix/sass/main.css"


const AuthContext = createContext()

const NetflixApp = () => {
    const [userLoged, setuserLoged] = useState(false)
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            setuserLoged(true)
            // ...
        } else {
            // User is signed out
            // ...
            setuserLoged(false)
        }
    });

    const Routes = {
        Home: '/',
        Main: '/main',
        login: '/login',
        signup: '/signup',
        contact: '/contact',
        privacy: '/privacy',
        About: '/About',
    }
    let history = useHistory()
    return (
        <>
            <AuthContext.Provider value={userLoged}>
                <Navbar />
                <Switch>
                    <Route exact path={Routes.Home} >
                        <Heading />
                        <CardSection />
                    </Route>
                    <Route exact path={Routes.privacy} render={() => <Privacy />} />
                    <Route exact path={Routes.login} render={() => userLoged ? history.push('/') : <SignIn />} />
                    <Route exact path={Routes.signup} render={() => userLoged ? history.push('/') : <Signup />} />
                    <Route exact path={Routes.About} render={() => <About />} />
                    <Route exact path={Routes.contact} render={() => <Contact />} />
                    <PrivateRoute path={Routes.Main} Component={Main} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </AuthContext.Provider>
        </>
    );
}


export default NetflixApp;
export { AuthContext }
