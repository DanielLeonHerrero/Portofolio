import React from 'react'
import PropTypes from 'prop-types'

const variants = {
    "flat": "w-full bg-white",
    "project": "w-full border shadow-md dark:shadow-gray-700 dark:text-white",
}

const Card = (props) => {

    const { children, variant, className } = props

    return (
        <div className={`${variants[variant]} ${className}`}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string
}  

export default Card