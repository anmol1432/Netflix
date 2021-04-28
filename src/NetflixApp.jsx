import React from 'react'
import Navbar from "./Netflix/Components/Navabar";
import Heading from "./Netflix/Components/Heading";
import CardSection from "./Netflix/Components/CardSection";
import SignIn from "./Netflix/Components/SignIn";
import Signup from "./Netflix/Components/Signup";
import Contact from "./Netflix/Components/Contact";
import Footer from "./Netflix/Components/Footer";
import { Route, Switch, Redirect} from "react-router-dom";
// css components
import "bootstrap/dist/css/bootstrap.min.css"
import "./Netflix/sass/main.css"


const NetflixApp = () => {
    const Routes = {
        Home: '/',
        login: '/login',
        signup: '/signup',
        contact: '/contact',
        privacy: '/privacy',
        About: '/About',
    }
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path={Routes.Home} render={() => <Heading />}>
                    <Heading />
                    <CardSection />
                </Route>
                <Route exact path={Routes.login} component={<SignIn />}>
                    <SignIn />

                </Route>
                <Route exact path={Routes.signup} component={<Signup />}>
                    <Signup />
                </Route>
                <Route exact path={Routes.contact} component={<Contact />}>
                    <Contact />
                </Route>
                <Redirect to="/" />
            </Switch>
            <Footer />

        </>
    );
}

export default NetflixApp;
