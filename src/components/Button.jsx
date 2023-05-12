import React from 'react'

const Button = (props) => {
    return (
        <button className="py-3 px-10 text-[1.5rem] bg-cv-green text-white rounded mt-6">
            {props.label}
        </button>

    )
}

export default Button