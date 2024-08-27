import { useState, useEffect } from "react";
import LanguageList from "../../../utils/languageList/languageList";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
    const { i18n } = useTranslation();
  const [language, setLanguage] = useState(LanguageList[i18n.language]);

  useEffect(() => {
    i18n.changeLanguage(language.key);
  }, [language]);

  return {
    language,
    setLanguage
  };
};

export default useLanguage;