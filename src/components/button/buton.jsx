import React from 'react';
import PropTypes from 'prop-types';

const variants = {
    "header": "border border-white p-3 rounded-full text-white",
}

const Button = (props) => {

    const { variant, svg } = props

    return (
        <button className={`flex gap-1 items-center ${variants[variant]}`}>
            {svg}
            <span>
                Descargarte mi CV
            </span>
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    svg: PropTypes.element
}

export default Button;