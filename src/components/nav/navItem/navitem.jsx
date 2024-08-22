import React from 'react'
import PropTypes from 'prop-types'

const SVGRepo = {
    "home": <>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>984</title> <defs> </defs> <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g transform="translate(1.000000, 1.000000)" fill="currentColor"> <path d="M15.794,7.77 L11.984,3.864 L11.9839997,1.01706251 L11.0159997,1.03906251 L11.016,2.767 L8.502,0.245 C8.224,-0.031 7.776,-0.031 7.499,0.245 L0.206,7.771 C-0.069,8.048 -0.068,8.498 0.206,8.773 C0.482,9.049 0.933,9.049 1.209,8.772 L8,1.982 L14.793,8.772 C14.931,8.91 15.111,8.98 15.293,8.98 C15.474,8.98 15.654,8.912 15.794,8.773 C16.068,8.496 16.068,8.045 15.794,7.77 L15.794,7.77 Z" className="si-glyph-fill"> </path> <path d="M3.043,8.532 L3.043,14.222 C3.043,14.616 3.26102394,15.0078125 3.61002394,15.0078125 L5.88702394,15.0078125 L5.95099996,11.0147705 L10.0249632,11.0147705 L10.0230128,15.0078125 L12.3260496,15.0078125 C12.6750496,15.0078125 12.958,14.617 12.958,14.222 L12.958,8.531 L8,3.625 L3.043,8.532 L3.043,8.532 Z" className="si-glyph-fill"> </path> </g> </g> </g>
    </>
}

const NavItem = (props) => {

    const { onClick, svg, name } = props

    return (
        <li onClick={onClick} className='flex items-center text-white'>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                {SVGRepo[svg]}
            </svg>
            <span>
                {name}
            </span>
        </li>
    )
}

NavItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired
}

export default NavItem


