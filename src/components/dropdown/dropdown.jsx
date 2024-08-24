import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = (props) => {

    const { className, children } = props

    return (
        <>
            <div className={`w-full h-full ${className}`}>
                {children}
            </div>
        </>
    )
}

Dropdown.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Dropdown