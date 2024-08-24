

const WorkSection = (props) => {

    const { sectionRef } = props

    return (
        <div ref={sectionRef} className="relative h-screen bg-white text-black">
          <section className="flex flex-col gap-5 items-center justify-center text-black m-10 text-center">
            <p className="text-lg sm:text-3xl text-dark dark:text-white">Nueva Sección</p>
            <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Contenido de la nueva sección</p>
          </section>
        </div>
    )
}

export default WorkSection