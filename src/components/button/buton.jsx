import React from 'react';
import PropTypes from 'prop-types';

const variants = {
    "header": "border p-3 rounded-full",
    "square": "border p-3",
    "noBorder": "p-3"
}

const Button = (props) => {

    const { variant, svg, text } = props

    return (
        <button className={`flex gap-1 items-center ${variants[variant]}`}>
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
    text: PropTypes.string
}

export default Button;