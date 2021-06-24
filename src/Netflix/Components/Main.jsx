import React, { useState, useEffect } from 'react'
import mh from "../Assets/thundercat.jpg";
import h from "../Assets/mh.jpg";
import n from "../Assets/netflix.svg";
import CardSection from "./CardSection";
import zIndex from '@material-ui/core/styles/zIndex';

const axios = require('axios').default;
const key = "798a9399b2bdd848aeb911f6a7b11d5a"
const Base_Url = "https://api.themoviedb.org/3/"



function Main() {



    return (
        <>
            <div className="MainBox ">
                <video width="320" height="240" controls>
                    <source src="https://coverr.co/videos/palm-trees-with-a-blue-sky-background-CY42HAIDv4"  />
                        Your browser does not support the video tag.
                </video>
                <div className="containerOfmain  ">
                    <h1 className="text-capitalize HeadingOfmain">Hollywood</h1>
                    <CardSection />
                </div>
            </div>
        </>
    )
}

export default Main;
