import React from 'react'
import CircularStatic from "./HelpingComponents/CircularProgressWithLabel";
import { useHistory } from "react-router"


const Card = (props) => {
    let histrory = useHistory()
    return (

        <div className='m-2 CARD' onClick={() => histrory.push('/main')}>
            <div className="card" >
                <img src={props?.img} className="card-img-top" alt="..." width='200' height='150' />
                <div className="card-body">
                    <div className="card-text">
                        <CircularStatic vote={parseInt(props?.vote)} />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Card;
