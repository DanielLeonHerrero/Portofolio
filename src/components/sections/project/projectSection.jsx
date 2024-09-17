import React from 'react'
import useSection from '../../../context/sectionContext/hook/useSection'
import SectionTitle from '../title/sectionTitle'
import { useTranslation } from 'react-i18next'
import ClipboardIcon from '../../svg/clipboard'
import Card from '../../card/card'
import ProjectsContainer from './projectContainer/projectContainer'
import Button from '../../button/buton'

const ProjectSection = () => {

  const { projectSection } = useSection()
  const { t } = useTranslation()
  const [ viewMore, setViewMore ] = React.useState(false)

  const handlerViewMore = () => {
    setViewMore(!viewMore)
  }

  return (
    <div ref={projectSection} className="text-black pt-20">
      <section className="flex flex-col gap-5 items-center justify-center text-black text-center pl-4 pr-4">
        <SectionTitle svg={() => <ClipboardIcon />} title={t("projectsSection.title")} subtitle={t("projectsSection.description")} />
        <div className='flex flex-col gap-5 md:flex-row'>
          <ProjectsContainer viewMore={viewMore}/>
        </div>
        <Button variant={"primary"} text={viewMore ? t("projectsSection.button.less"): t("projectsSection.button.more")} onClick={handlerViewMore}/>
      </section>
    </div>
  )
}

export default ProjectSection