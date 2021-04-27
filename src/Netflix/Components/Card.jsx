import React from 'react'
import mh from "../Assets/thundercat.jpg";


const Card = (props) => {
    return (
        <div className=" m-2 CARD ">
            <div className="card">
                <img src={mh} className="card-img-top" alt="..." width='200' height='150' />
                <div className="card-body">
                    <div className="card-text">
                        <p className=" text-capitalize star">{props.star}⭐⭐⭐⭐</p>
                        <p className=" text-capitalize">{props.sometext} Money heist</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
