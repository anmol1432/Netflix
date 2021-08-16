import React, { useState, useEffect } from 'react'
import Banner from "../Components/HelpingComponents/Banner/index";
import Row from "../Components/HelpingComponents/Row/index";
import requests from '../api/request';


function Main() {
    return (
        <>
            <div className=" ">
                <div>
                    <Banner />
                    {/* rows */}
                    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
                    <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
                    <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
                </div>
            </div>
        </>
    )
}

export default Main;
