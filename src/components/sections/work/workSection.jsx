import React from 'react'
import useSection from '../../../context/sectionContext/hook/useSection'
import Card from '../../card/card'
import Person from '../../svg/person'
import SectionTitle from '../title/sectionTitle'
import Social from '../../social/social'

const WorkSection = () => {

  const { workSection } = useSection()

  return (
    <div ref={workSection} className="w-full h-auto text-black pt-20 pr-4 sm:pr-20 pl-4 sm:pl-20">
      <section className="w-full flex flex-col gap-5 items-center justify-center text-black text-center">
        <SectionTitle svg={() => <Person />} title="Sobre mi" subtitle="Una breve descripción de mi persona en mi etapa profesional." />
        <Card variant={"flat"} className={"flex flex-col gap-2 p-16 bg-white lg:flex-row dark:bg-gray-900 dark:text-white"}>
          <div className='flex flex-col gap-2'>
            <div className='w-full flex flex-col gap-2 sm:flex-row items-center justify-center md:justify-start'>
              <div className='w-2/4 md:w-1/4 bg-rd-500 h-auto rounded lg:w-1/4'>
                <img src="/images/photo.jpg" alt="image" className='rounded-md' />
              </div>
              <div className='flex flex-col gap-3 text-start'>
                <p><span className='font-bold'>Nombre: </span> Daniel Leon Herrero</p>
                <p><span className='font-bold'>Perfil: </span> Full Stack Developer</p>
                <p><span className='font-bold'>Email: </span> danielleon157@outlook.com</p>
                <p><span className='font-bold'>Telefono: </span> +34 604 34 30 87</p>
              </div>
            </div>
            <div className='flex items-center justify-center md:justify-start'>
              <Social />
            </div>
          </div>
          <div className='w-full flex flex-col gap-3 lg:items-start'>
            <h3 className='font-bold'>Habilidades:</h3>
            <div className='flex flex-col gap-5 items-start text-start'>
              <p><span className='font-bold'>Back-End: </span>PHP, Node.js, .NET, C#, Python, Java</p>
              <p><span className='font-bold'>Front-End: </span>React, JavaScript, TypeScript, HTML5, CSS3, Tailwind, Bootstrap</p>
              <p><span className='font-bold'>Base de datos: </span>MySQL, SQL Server, Maria DB, Progress, MongoDB</p>
              <p><span className='font-bold'>Otros: </span>GIT, REST, Docker</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default WorkSection