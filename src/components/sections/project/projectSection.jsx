import React from 'react'
import useSection from '../../../context/sectionContext/hook/useSection'

const ProjectSection = () => {

    const { projectSection } = useSection()

    return (
        <div ref={projectSection} className="h-screen text-black">
          <section className="flex flex-col gap-5 items-center justify-center text-black text-center">
            <p className="text-lg sm:text-3xl text-dark dark:text-white">Nueva Sección Dedicada a projectos</p>
            <p className="font-bold text-3xl sm:text-6xl lg:text-7xl dark:text-white">Projectos</p>
          </section>
        </div>
    )
}

export default ProjectSection