import React from 'react';
import PropTypes from 'prop-types';

const variants = {
    "header": "border rounded-full",
    "square": "border",
    "noBorder": ""
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