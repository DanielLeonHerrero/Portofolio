import React from 'react';
import PropTypes from 'prop-types';
import LocationIcon from '../../../svg/location';

const WorkTimeLineElement = (props) => {

    const { data } = props

    let isEven = data.id % 2 === 0

    return (
        <div className={`absolute h-auto w-96 bg-white shadow-md  top-5 lg:p-4 lg:top-[-1rem] ${isEven  ? 'lg:right-20' : 'lg:left-20'} dark:shadow-gray-700 dark:bg-gray-900 dark:text-white`}>
            <div className='p-12'>
                <h1 className='text-start font-semibold text-2xl'>{data.position}</h1>
                <div className='w-12 h-1 mt-3 mb-3 bg-black dark:bg-white' />
                <p className='text-start mb-6'>{data.company}</p>
                <p className='text-start'>{data.description}</p>
                <div className='flex items-center justify-end mt-5'>
                    <LocationIcon className='w-4 h-4 mr-2 dark:text-white' />
                    <p>{data.location}</p>
                </div>
            </div>
            <div className={`hidden lg:flex absolute w-8 h-3 ${!isEven ? 'left-[-30px] top-10 transform -translate-y-1/2 bg-gradient-to-r from-black to-white dark:from-white dark:to-gray-900' : 'right-[-30px] top-10 transform -translate-y-1/2 bg-gradient-to-l from-black to-white dark:from-white dark:to-gray-900'}`} />
        </div>
    )
}

WorkTimeLineElement.propTypes = {
    data: PropTypes.object.isRequired
}

export default WorkTimeLineElement;