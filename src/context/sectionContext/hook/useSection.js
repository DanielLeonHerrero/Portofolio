import { useContext } from "react"
import sectionContext from "../sectionContext"


const useSection = () => {
    return useContext(sectionContext)
}

export default useSection
