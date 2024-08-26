import { useState } from "react"
import LanguageList from "../../../utils/languageList/languageList";

const useLanguage = () => {
    const [language, setLanguage] = useState(LanguageList.es)

    return {
        language,
        setLanguage
    }
}

export default useLanguage;