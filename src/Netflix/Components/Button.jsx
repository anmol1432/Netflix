import React from 'react'

const Button = (props) => {
    return (
        <>
            <button  className={props.AddClass} onClick={props.onClick}>
               {props.name}
            </button>
        </>
    )
}

export default Button;
