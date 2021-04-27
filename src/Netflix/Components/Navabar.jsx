import React from 'react'
import Netflix from "../Assets/netflix.svg"
import mh from "../Assets/mh.jpg"
import { NavLink } from "react-router-dom";
import { Search } from 'react-bootstrap-icons';
import Button from "./Button";
import DropDown from "./DropDown";


const Navabar = () => {
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
                            <Button
                                name="login"
                                AddClass="btn btn-outline-danger text-capitalize login px-4"
                            />
                        </NavLink>
                        {/* <NavLink exact className="" to="/login">
                            <Button
                                name=" create account"
                                AddClass="btn btn-outline-danger text-capitalize create-account px-4"
                            />
                        </NavLink> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navabar;
