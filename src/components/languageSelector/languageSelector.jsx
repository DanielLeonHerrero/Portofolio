import React from "react";
import Button from "../button/buton";
import LanguageMenu from "./languageMenu/languageMenu";
import PropTypes from 'prop-types'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageList from "../../utils/languageList/languageList";

const normalizeLanguageCode = (code) => {
  if (!code) return null;
  return code.split('-')[0];
}
const LanguageSelector = (props) => {

    const { headerBg, textColor } = props
    const { i18n } = useTranslation()
    const normalizedLanguageCode = normalizeLanguageCode(i18n.language);
    const language = LanguageList[normalizedLanguageCode];
    const [showMenuLanguage, setShowMenuLanguage] = useState(false)

    return (
<div className="flex flex-col items-center">
  <Button
    variant="noBorder"
    text={language.name}
    svg={<language.icon className="w-6 h-6" />}
    className={"h-8 w-full flex justify-center "}
    onClick={() => setShowMenuLanguage(!showMenuLanguage)}
  />

  {showMenuLanguage && <LanguageMenu className={`mt-3 bg-${headerBg} text-${textColor} transition-color duration-500 lg:absolute lg:top-[4.2rem] lg:mt-1 lg:rounded`} />}
</div>
    )
}

LanguageSelector.propTypes = {
    headerBg: PropTypes.string,
    textColor: PropTypes.string
}

export default LanguageSelector;