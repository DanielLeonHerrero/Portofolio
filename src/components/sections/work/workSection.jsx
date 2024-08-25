import React from 'react'
import PropTypes from 'prop-types'

const WorkSection = () => {

    return (
        <div className="relative h-screen text-black dark:bg-black">
          <section className="flex flex-col gap-5 items-center justify-center text-black text-center">
            <p className="text-lg sm:text-3xl text-dark dark:text-white">Nueva Sección</p>
            <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Contenido de la nueva sección</p>
          </section>
        </div>
    )
}

WorkSection.propTypes = {
}

export default WorkSection