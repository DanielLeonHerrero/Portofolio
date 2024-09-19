import { useTranslation } from "react-i18next"
import Card from "../../../card/card"
import PropTypes from 'prop-types'
import useModal from "../../../../context/modalContext/hook/useModal"
import ProjectModal from "../projectModal/projectModal"

const ProjectsContainer = (props) => {
    const { viewMore } = props
    const { t } = useTranslation()
    const { openModal, closeModal, isOpen } = useModal()
    const myProjects = t("projectsSection.list", { returnObjects: true })

    return (
        <div className="flex flex-wrap justify-center">
            {
                myProjects && myProjects
                    .map((project, index) => {
                        return (
                            <div key={project.id} className={`w-full max-w-sm sm:w-1/2 lg:w-1/3 transition-all duration-1000 ease-in-out ${index < 6 || viewMore ? 'p-4 max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
                                onClick={() => openModal(<ProjectModal project={project}/>)}>
                                <Card id={project.id} variant={"project"} className={`flex flex-col dark:text-white `}>
                                    <div className="w-full">
                                        <img src={`/images/projects/${project.id}.png`} alt="project" />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full pt-10 pl-5 pr-5 pb-5 bg-white text-start dark:bg-gray-900">
                                        <h3 className="font-bold">{project.name}</h3>
                                        <div className="flex flex-wrap w-full gap-1 text-white">
                                            {project.tags.map((tag, index) => {
                                                return (
                                                    <span key={index} className="text-xs bg-black font-bold dark:bg-white dark:text-black p-1 rounded-md">{tag}</span>
                                                )
                                            })}
                                        </div>
                                        <p className="text-end">{project.date}</p>
                                    </div>
                                </Card>
                            </div>
                        )
                    })
            }
        </div>
    )
}

ProjectsContainer.propTypes = {
    viewMore: PropTypes.bool
}

export default ProjectsContainer