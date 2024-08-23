import React from 'react'
import PropTypes from 'prop-types'


const NavItem = (props) => {

    const { onClick, svg, name } = props

    return (
        <li onClick={onClick} className='flex items-center gap-1'>
            {svg}
            <span>
                {name}
            </span>
        </li>
    )
}

NavItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired
}

export default NavItem
