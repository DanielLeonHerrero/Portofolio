import React from 'react';
import PropTypes from 'prop-types';

const LanguageElement = (props) => {

    const { name, icon, onClick } = props

    return (
        <li className='flex gap-1 cursor-pointer' onClick={onClick}>
            <div className='w-6 h-6'>
                {icon()}
            </div>
            <p>
                {name}
            </p>
        </li>
    )
}

LanguageElement.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.elementType,
    onClick: PropTypes.func
}

export default LanguageElement;