import WorkSection from "./work/workSection"
import PropTypes from 'prop-types'

const Sections = (props) => {
    const { sectionRef } = props
    return (
        <div ref={sectionRef}>
            <WorkSection />
            <WorkSection />
            <WorkSection />
            <WorkSection />
        </div>
    )
}

Sections.propTypes = {
    sectionRef: PropTypes.object.isRequired
}

export default Sections