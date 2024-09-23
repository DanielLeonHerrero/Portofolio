import React from 'react';
import PropTypes from 'prop-types';
import LanguageElement from '../languageElement/languageElement';
import LanguageList from '../../../utils/languageList/languageList';
import useLanguage from '../hook/useLanguage';

const LanguageMenu = (props) => {

    const { className } = props
    const { language, setLanguage } = useLanguage()

    console.log(language);

    Object.entries(LanguageList)
                .filter(([key]) => key !== language.key)
                .map(([key, language]) => (
                    console.log(key, language)
                ))

    return (
        <div className={className}>
            <ul className='flex flex-col gap-4 pr-10 pl-10 pb-5'>
                {Object.entries(LanguageList)
                .filter(([key]) => key !== language.key)
                .map(([key, language]) => (
                    <LanguageElement key={key} name={language.name} icon={language.icon} onClick={() => setLanguage(language)}/>
                ))}
            </ul>
        </div>
    )
}

LanguageMenu.propTypes = {
    className: PropTypes.string
}

export default LanguageMenu;