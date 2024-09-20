import React from 'react';
import PropTypes from 'prop-types';

const SocialElement = (props) => {

    const { svg, onClick } = props

    return (
        <div className='w-10 h-10 bg-transparent rounded-full border-2 border-solid border-black flex items-center justify-center cursor-pointer transition-color duration-500 hover:bg-black hover:text-white hover:border-gray-300 dark:border-white dark:hover:bg-white dark:hover:text-black dark:hover:border-gray-500' onClick={onClick}>
            <div className='w-5'>
                {svg}
            </div>
        </div>
    );
}

SocialElement.propTypes = {
    svg: PropTypes.element,
    onClick: PropTypes.func
}

export default SocialElement;