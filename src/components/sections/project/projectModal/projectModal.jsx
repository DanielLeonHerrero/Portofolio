import React from 'react'
import PropTypes from 'prop-types'

const ProjectModal = (props) => {

    const { project } = props

    return (
        <div className="flex flex-col items-center text-center">
            <div className="">
                <img src="/images/projects/1.png" alt="project" />
            </div>
            <div className="bg-white max-h-96 overflow-y-scroll dark:bg-gray-900">
                <h1 className='text-2xl font-bold'>{project.name}</h1>
            </div>
        </div>
    )
}

ProjectModal.propTypes = {
    project: PropTypes.object
}

export default ProjectModal