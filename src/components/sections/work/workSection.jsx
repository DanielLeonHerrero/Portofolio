import React from 'react'
import useSection from '../../../context/sectionContext/hook/useSection'

const WorkSection = () => {

    const { workSection } = useSection()

    return (
        <div ref={workSection} className="relative h-screen text-black dark:bg-black">
          <section className="flex flex-col gap-5 items-center justify-center text-black text-center">
            <p className="text-lg sm:text-3xl text-dark dark:text-white">Nueva Sección Dedicada al trabajo</p>
            <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Trabajo</p>
          </section>
        </div>
    )
}

export default WorkSection