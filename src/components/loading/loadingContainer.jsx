import React from 'react';
import LoadingIcon from '../svg/loading';

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className='w-10 h-10'>
                <LoadingIcon />
            </div>
        </div>
    )
}

export default Loading;