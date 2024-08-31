import React from 'react'
import useSection from '../../../context/sectionContext/hook/useSection'
import Card from '../../card/card'
import Person from '../../svg/person'
import SectionTitle from '../title/sectionTitle'
import Social from '../../social/social'
import SuitcaseIcon from '../../svg/suitcase'
import { useTranslation } from 'react-i18next'
import WorkTimeLine from './workTimeLine/workTimeLine'

const WorkSection = () => {

  const { workSection } = useSection()
  const { t } = useTranslation()

  return (
    <div ref={workSection} className="w-full h-auto text-black pt-20 pr-4 sm:pr-20 pl-4 sm:pl-20">
      <section className="w-full flex flex-col gap-5 items-center justify-center text-black text-center">
        <SectionTitle svg={() => <Person />} title={t("aboutmeSection.title")} subtitle={t("aboutmeSection.description")} />
        <Card variant={"flat"} className={"flex flex-col gap-2 p-16 bg-white lg:flex-row dark:bg-gray-900 dark:text-white"}>
          <div className='flex flex-col gap-2'>
            <div className='w-full flex flex-col gap-2 sm:flex-row items-center justify-center md:justify-start'>
              <div className='w-2/4 md:w-1/4 bg-rd-500 h-auto rounded lg:w-1/4'>
                <img src="/images/photo.jpg" alt="image" className='rounded-md' />
              </div>
              <div className='flex flex-col gap-3 text-start'>
                <p><span className='font-bold'>{t("aboutmeSection.name")}:  </span> Daniel Leon Herrero</p>
                <p><span className='font-bold'>{t("aboutmeSection.profile")}:  </span> Full Stack Developer</p>
                <p><span className='font-bold'>{t("aboutmeSection.email")}:  </span> danielleon157@outlook.com</p>
                <p><span className='font-bold'>{t("aboutmeSection.phone")}:  </span> +34 604 34 30 87</p>
              </div>
            </div>
            <div className='flex items-center justify-center md:justify-start'>
              <Social />
            </div>
          </div>
          <div className='w-full flex flex-col gap-3 lg:items-start'>
            <h3 className='font-bold'>{t("aboutmeSection.habilities")}:</h3>
            <div className='flex flex-col gap-5 items-start text-start'>
              <p><span className='font-bold'>Back-End: </span>PHP, Node.js, .NET, C#, Python, Java</p>
              <p><span className='font-bold'>Front-End: </span>React, JavaScript, TypeScript, HTML5, CSS3, Tailwind, Bootstrap</p>
              <p><span className='font-bold'>{t("aboutmeSection.databases")}: </span>MySQL, SQL Server, Maria DB, Progress, MongoDB</p>
              <p><span className='font-bold'>{t("aboutmeSection.others")}: </span>GIT, REST, Docker</p>
            </div>
          </div>
        </Card>

        <SectionTitle svg={() => <SuitcaseIcon />} title={t("workSection.title")} subtitle={t("workSection.description")} />
        <div className='mt-5 w-full'>
          <WorkTimeLine />
        </div>
      </section>
    </div>
  )
}

export default WorkSection