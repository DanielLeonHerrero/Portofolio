import React from 'react'
import PropTypes from 'prop-types'

const variants = {
    primary: 'text-5xl',
    secondary: 'text-2xl'
}

const barContainerVariants = {
    primary: 'justify-center',
    secondary: 'justify-center md:justify-start'
}

const barVariants = {
    primary: 'w-10',
    secondary: 'w-24'
}

const SectionTitle = ({ svg = () => {}, title = '', subtitle = '', variant = 'primary' }) => {
    return (
        <>
            <div className='flex gap-1 items-center dark:text-white'>
                <div className='w-10'>
                    {svg()}
                </div>
                <h1 className={`${variants[variant]} font-bold`}>{title.toUpperCase()}</h1>
            </div>
            <p className='dark:text-white'>{subtitle}</p>
            <div className={`flex mt-4 ${barContainerVariants[variant]}`}>
                <div className={`bg-black dark:bg-white h-1 ${barVariants[variant]}`} />
            </div>
        </>
    )
}

SectionTitle.propTypes = {
    svg: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary'])
}

export default SectionTitle