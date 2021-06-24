import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Trending, tvEpisodes, Movies } from "../action/action";

const Heading = () => {
    const state = useSelector(state => state.changeCardLink)
    const dispatch = useDispatch()
    return (
        <>
            <div className="mid-section text-center">
                <h1 className="text-capitalize Heading-h1">Unlimited movies, Tv shows, and more</h1>
                <h2 className="text-capitalize Heading-h2 mt-2"> Watch anywhere, cancel anytime</h2>
                <div className="button-container mt-5 mb-3">
                    <button className="text-capitalize btn-outline-danger btn ml-0" onClick={() => { dispatch(Trending()) }}>
                    Trending
                    </button>
                    <button className="text-capitalize btn-outline-danger btn" onClick={() => { dispatch(tvEpisodes()) }}>
                        Tv Episodes
                    </button>
                    <button className="text-capitalize btn-outline-danger btn" onClick={() => { dispatch(Movies()) }}>
                        Movies
                    </button>
                </div>
            </div>
        </>
    )
}

export default Heading;

