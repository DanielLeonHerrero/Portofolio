import React from 'react'
import PropTypes from 'prop-types'

const Menu = (props) => {

    const { onClick } = props

    return (
        <button className="h-auto w-10 sm:hidden" onClick={onClick}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </button>
    )
}

Menu.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Menu