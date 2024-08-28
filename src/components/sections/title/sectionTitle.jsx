import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = (props) => {

    const { svg, title, subtitle } = props

    return (
        <>
            <div className='flex gap-1 items-center'>
                <div className='w-10'>
                    {svg()}
                </div>
                <h1 className='text-5xl font-bold'>{title.toUpperCase()}</h1>
            </div>
            <p>{subtitle}</p>
            <div className='bg-black h-1 w-10' />
        </>
    )
}

SectionTitle.propTypes = {
    svg: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SectionTitle