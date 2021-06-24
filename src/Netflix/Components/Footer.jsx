import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" footer">
            <footer className="pagefooter font-small blue">
                <ul className="list text-capitalize">
                    <NavLink exact className="navbar-brand" to="/main">
                        <li>contact</li>
                    </NavLink>
                    <NavLink exact className="navbar-brand" to="/privacy">
                        <li>Privacy</li>
                    </NavLink>
                    <NavLink exact className="navbar-brand" to="/About">
                        <li>About</li>
                    </NavLink>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;
