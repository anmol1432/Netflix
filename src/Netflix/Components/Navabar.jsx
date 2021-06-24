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
            <span className="bg">
                <img src={mh} className="bg-img" id="bg-img" alt="" />
            </span>
            <div className="Navbar-container">
                <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <NavLink exact className="navbar-brand" to="/">
                            <img src={Netflix} alt="" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <form className="d-flex">
                                    <input className="form-control form-nav mr-lg-5" type="search" placeholder="Search movies and episodes" aria-label="Search" />
                                    <button className="btn btn-danger Search-btn" type="submit">
                                        <Search color="red" className="search-icon icon" />Search
                                </button>
                                </form>
                                <DropDown />

                                {flag ?
                                    <Button
                                        name="signout"
                                        onClick={() => auth.signOut()}
                                        AddClass="btn btn-outline-danger text-capitalize login px-4"
                                    />:
                                    <NavLink exact className="" to="/login">
                                        <Button
                                            name="login"
                                            AddClass="btn btn-outline-danger text-capitalize login px-4"
                                        />
                                    </NavLink>
                                }

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navabar;
