import React, { useContext } from 'react'
import Netflix from "../Assets/netflix.svg"
import mh from "../Assets/mh.jpg"
import { NavLink } from "react-router-dom";
import { Search } from 'react-bootstrap-icons';
import Button from "./Button";
import DropDown from "./DropDown";
import { auth } from '../../firebase'
import { AuthContext } from "./../../NetflixApp";


const Navabar = () => {
    const flag = useContext(AuthContext)
    return (
        <>
            <img src={mh} className="bg-img" alt="" />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink exact className="navbar-brand" to="/">
                    <img src={Netflix} alt="" />
                </NavLink>
                <div className="nav-container d-flex">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <input className="form-control form-nav mr-lg-5" type="search" placeholder="Search movies and episodes" aria-label="Search" />
                            <Search color="red" className="search-icon icon" />
                        </ul>
                        <DropDown />
                        <NavLink exact className="" to="/login">
                            {flag ?
                                <Button
                                    name="signout"
                                    onClick={() => auth.signOut()}
                                    AddClass="btn btn-outline-danger text-capitalize login px-4"
                                /> : <Button
                                    name="login"
                                    AddClass="btn btn-outline-danger text-capitalize login px-4"
                                />
                            }
                        </NavLink>
                    </div>
                </div>
            </nav>
            {/* ========================================================================== */}
                {/* <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
                    <div class="container-fluid">
                        <NavLink exact className="navbar-brand" to="/">
                            <img src={Netflix} alt="" />
                        </NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-danger" type="submit">Search</button>
                                </form>
                                
                            </ul>
                            <DropDown />
                            <NavLink exact className="" to="/login">
                                <Button
                                    name="login"
                                    AddClass="btn btn-outline-danger text-capitalize login px-4"
                                /> */}
            {/* <Button
                                name="signout"
                                onClick={() => auth.signOut()}
                                AddClass="btn btn-outline-danger text-capitalize login px-4"
                            /> */}
            {/* </NavLink>
                    </div>
                </div>
            </nav> */}
        </>
    )
}

export default Navabar;
