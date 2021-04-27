import React from 'react'

const Heading = () => {
    return (
        <>
            <div className="mid-section text-center">
                <h1 className="text-capitalize Heading-h1">Unlimited movies, Tv shows, and more</h1>
                <h2 className="text-capitalize Heading-h2 mt-2"> Watch anywhere, cancel anytime</h2>
                <div className="button-container mt-5 mb-3">
                    <button className="text-capitalize btn-outline-danger btn ml-0">trending,favouraites</button>
                    <button className="text-capitalize btn-outline-danger btn">Series and shows</button>
                    <button className="text-capitalize btn-outline-danger btn">Movies</button>
                </div>
            </div>
        </>
    )
}

export default Heading;
