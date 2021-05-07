import React, { useState, createContext } from 'react'
import Navbar from "./Netflix/Components/Navabar";
import Heading from "./Netflix/Components/Heading";
import CardSection from "./Netflix/Components/CardSection";
import SignIn from "./Netflix/Components/SignIn";
import Signup from "./Netflix/Components/Signup";
import Contact from "./Netflix/Components/Contact";
import Footer from "./Netflix/Components/Footer";
import Main from "./Netflix/Components/Main";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from './firebase';
import Private_Route from "./Netflix/Components/Private_Route";
// css components
import "bootstrap/dist/css/bootstrap.min.css"
import "./Netflix/sass/main.css"


const AuthContext = createContext()

const NetflixApp = () => {
    const [state, setstate] = useState(false)
    auth.onAuthStateChanged((user) => {
        if (user) {
            return setstate(true)
        }
        else {
            return setstate(false)
        }

    })
    const Routes = {
        Home: '/',
        Main: '/main',
        login: '/login',
        signup: '/signup',
        contact: '/contact',
        privacy: '/privacy',
        About: '/About',
    }
    return (
        <>
            <AuthContext.Provider value={state}>
                <Navbar />
                <Switch>
                    <Route exact path={Routes.Home} render={() => <Heading />}>
                        <Heading />
                        <CardSection />
                    </Route>
                    {/* show login page only when user is not loged in if loged in then redirect to "/" home page */}
                    {
                        state ?
                            <Route exact path={Routes.login} render={() => <Redirect to="/" />} />
                            :
                            <Route exact path={Routes.login} render={() => <SignIn />}>
                                <SignIn />
                            </Route>
                    }
                    {
                        state ?
                            <Route exact path={Routes.signup} render={() => <Redirect to="/" />} />
                            :
                            <Route exact path={Routes.signup} component={<Signup />}>
                                <Signup />
                            </Route>
                    }
                    {/* if they want to acess main page and they are not loged in then redirect to login*/}
                    {
                        state ?
                            <Route exact path={Routes.Main} render={() => <Main />}>
                                <Main />
                            </Route>
                            :
                            <Route exact path={Routes.Main} render={() => <Redirect to="/login" />} />
                    }

                    {/* <Route exact path={Routes.signup} component={<Signup />}>
                        <Signup />
                    </Route> */}

                    <Route exact path={Routes.contact} component={<Contact />}>
                        <Contact />
                    </Route>

                    <Redirect to="/" />
                </Switch>
                <Footer />
            </AuthContext.Provider>
        </>
    );
}

export default NetflixApp;
export { AuthContext }
