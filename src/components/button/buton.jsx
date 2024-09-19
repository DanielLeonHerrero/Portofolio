import React from 'react';
import PropTypes from 'prop-types';

const variants = {
    "header": "border rounded-full",
    "square": "border",
    "noBorder": "",
    "primary": "bg-black text-white w-48 h-14 rounded-full flex justify-center hover:bg-gray-600 hover:border-solid hover:border-4 hover:border-black dark:bg-white dark:text-black dark:hover:bg-gray-300 dark:hover:border-white",
    "modal-close" : "text-black w-8 h-8 flex justify-center dark:text-white",
    "link": "text-black dark:text-white",
}

const Button = (props) => {

    const { variant, svg, text, className, onClick} = props

    return (
        <button className={`flex gap-1 items-center ${variants[variant]} ${className}`} onClick={onClick}>
            {svg}
            <span>
                {text}
            </span>
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    svg: PropTypes.element,
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;