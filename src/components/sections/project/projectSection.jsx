import React from 'react'
import useSection from '../../../context/sectionContext/hook/useSection'
import SectionTitle from '../title/sectionTitle'
import { useTranslation } from 'react-i18next'
import ClipboardIcon from '../../svg/clipboard'

const ProjectSection = () => {

  const { projectSection } = useSection()

  const { t } = useTranslation()

  return (
    <div ref={projectSection} className="h-screen text-black pt-20">
      <section className="flex flex-col gap-5 items-center justify-center text-black text-center">
        <SectionTitle svg={() => <ClipboardIcon />} title={t("projectsSection.title")} subtitle={t("projectsSection.description")} />
      </section>
    </div>
  )
}

export default ProjectSection