import { useContext } from "react"
import themeContext from "../themeContext"


const useTheme = () => {
    return useContext(themeContext)
}

export default useTheme