import { useTranslation } from "react-i18next"
import Card from "../../../card/card"


const ProjectsContainer = () => {

    const { t } = useTranslation()
    const myProjects = t("projectsSection.list", { returnObjects: true })

    return (
        <>
            {
                myProjects && myProjects.map(project => {
                    return (
                        <div key={project.id}>
                            <Card id={project.id} variant={"project"} className={"flex flex-col dark:text-white"}>
                                <div className="w-full">
                                    <img src={`/images/projects/${project.id}.png`} alt="project" />
                                </div>
                                <div className="flex flex-col gap-2 w-full pt-10 pl-5 pr-5 pb-5 bg-white text-start dark:bg-gray-900">
                                    <h3 className="font-bold">{project.name}</h3>
                                    <div className="flex gap-1 text-white">
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
        </>
    )
}

export default ProjectsContainer