import React from 'react'
import PropTypes from 'prop-types'
import MenuIcon from '../svg/menu'

const Menu = (props) => {

    const { onClick } = props

    return (
        <button className="h-auto w-10" onClick={onClick}>
            <MenuIcon className="w-8 h-8"/>
        </button>
    )
}

Menu.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Menu