import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" footer">
            <footer className="pagefooter font-small blue">
                <ul className="list text-capitalize">
                    <NavLink exact className="navbar-brand" to="/contact">
                        <li>contact</li>
                    </NavLink>
                    <NavLink exact className="navbar-brand" to="/login">
                        <li>Privacy</li>
                    </NavLink>
                    <NavLink exact className="navbar-brand" to="/main">
                        <li>About</li>
                    </NavLink>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;
