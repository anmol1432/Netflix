import React from 'react'
import CircularStatic from "./HelpingComponents/CircularProgressWithLabel";



const Card = (props) => {

    return (
       
            <div className='m-2 CARD'>
                <div className="card" >
                    <img src={props.img} className="card-img-top" alt="..." width='200' height='150' />
                    <div className="card-body">
                        <div className="card-text">
                            <CircularStatic vote={props.vote} />
                        </div>
                    </div>
                </div>
            </div>
       
    )
};

export default Card;
