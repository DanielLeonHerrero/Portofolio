import React from 'react'
import PropTypes from 'prop-types'


const NavItem = (props) => {

    const { onClick, svg, name, className } = props

    return (
        <li onClick={onClick} className={`${className} cursor-pointer`}>
            <div className='flex gap-1 items-center'>
                {svg}
                <span className=''>
                    {name}
                </span>
            </div>
        </li>
    )
}

NavItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired,
    className: PropTypes.string
}

export default NavItem
