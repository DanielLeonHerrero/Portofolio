import { useState, useEffect } from "react";
import LanguageList from "../../../utils/languageList/languageList";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const languageCode = i18n.language.split('-')[0]; // Esto dará 'es' si i18n.language es 'es-ES'
  const [language, setLanguage] = useState(LanguageList[languageCode]);

  useEffect(() => {
    i18n.changeLanguage(language.key);
  }, [language]);

  return {
    language,
    setLanguage
  };
};

export default useLanguage;