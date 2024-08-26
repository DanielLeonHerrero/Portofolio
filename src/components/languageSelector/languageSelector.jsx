import React from "react";
import Button from "../button/buton";
import LanguageMenu from "./languageMenu/languageMenu";
import PropTypes from 'prop-types'
import { useState } from "react";
import useLanguage from "./hook/useLanguage";

const LanguageSelector = (props) => {

    const { headerBg, textColor } = props

    const { language } = useLanguage()
    const [showMenuLanguage, setShowMenuLanguage] = useState(false)

    console.log(language);

    return (
<div className="flex flex-col items-center">
  <Button
    variant="noBorder"
    text={language.name}
    svg={<language.icon className="w-6 h-6" />}
    className={"h-8 w-full flex justify-center "}
    onClick={() => setShowMenuLanguage(!showMenuLanguage)}
  />

  {showMenuLanguage && <LanguageMenu className={`mt-3 bg-${headerBg} text-${textColor} transition-color duration-500 lg:absolute lg:top-[4.2rem] lg:mt-0 lg:rounded`} />}
</div>
    )
}

LanguageSelector.propTypes = {
    headerBg: PropTypes.string,
    textColor: PropTypes.string
}

export default LanguageSelector;