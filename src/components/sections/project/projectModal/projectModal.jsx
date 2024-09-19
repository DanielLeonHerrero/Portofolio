import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Button from '../../../button/buton'

const ProjectModal = (props) => {

    const { project } = props
    const { t } = useTranslation()

    const hanlderOpenNewTab = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className="flex flex-col w-screen md:max-w-2xl max-h-svh items-start text-start">
            <div>
                <img src={`/images/projects/${project.id}.png`} alt="project" />
            </div>
            <div className="bg-white w-full max-h-xl overflow-y-scroll dark:bg-gray-900 pt-10 pl-5 pr-5 pb-5">
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>{project.name}</h1>
                <div className='max-h-48 overflow-y-scroll mt-5 mb-5'>
                    {project.description}
                </div>
                <h2>{t('projectsSection.tecnologies')}</h2>
                <div className='max-h-28 mt-3 overflow-x-hidden'>
                    <div className=''>
                        {project.tags.map((tag, index) => {
                            return (
                                <li key={index}>{tag}</li>
                            )
                        })}
                    </div>
                </div>
                <div className='w-full flex justify-center gap-2 mt-2 mb-2'>
                    <Button variant="primary" text={t("projectsSection.link")} onClick={() => { hanlderOpenNewTab(project.linkProject) }} />
                    <Button variant="primary" text={t("projectsSection.github")} onClick={() => { hanlderOpenNewTab(project.linkGithub) }} />
                </div>
                <p className="text-end">{project.date}</p>
            </div>
        </div>
    )
}

ProjectModal.propTypes = {
    project: PropTypes.object
}

export default ProjectModal