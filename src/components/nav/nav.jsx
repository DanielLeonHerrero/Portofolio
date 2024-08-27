import Button from "../button/buton"
import HomeIcon from "../svg/home"
import SuitcaseIcon from "../svg/suitcase"
import ClipboardIcon from "../svg/clipboard"
import NavItem from "./navItem/navitem"
import MoonIcon from "../svg/moon"
import ContactBook from "../svg/contactBook"
import useTheme from "../../context/themeContext/hook/useTheme"
import SunIcon from "../svg/sun"
import useSection from "../../context/sectionContext/hook/useSection"
import PropTypes from 'prop-types'
import LanguageSelector from "../languageSelector/languageSelector"
import { useTranslation } from "react-i18next"

const Nav = (props) => {
    const { setMenuOpen, headerBg, textColor } = props
    const { toggleTheme, theme } = useTheme()
    const { workSection, welcomeSection, projectSection, contactSection, handleScroll } = useSection()
    const { t } = useTranslation()


    const handlerChangeTheme = () => {
        toggleTheme()
    }

    const handlerClick = (section) => {
        handleScroll(section)
        if (setMenuOpen) {
            setMenuOpen(false)
        }
    }


    return (
        <nav className="w-full">
            <ul className="flex flex-col items-center gap-3 lg:flex-row lg:gap-10">

                <NavItem
                    name={t("nav.home")}
                    svg={<HomeIcon className="w-6 h-6" />}
                    onClick={() => handlerClick(welcomeSection)}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name={t("nav.work")}
                    svg={<SuitcaseIcon className="w-6 h-6" />}
                    onClick={() => handlerClick(workSection)}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name={t("nav.projects")}
                    svg={<ClipboardIcon className="w-6 h-6" />}
                    onClick={() => handlerClick(projectSection)}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name={t("nav.contact")}
                    svg={<ContactBook className="w-6 h-6" />}
                    onClick={() => handlerClick(contactSection)}
                    className={"h-8 w-full flex justify-center"}
                />

                <LanguageSelector headerBg={headerBg} textColor={textColor}/>
               
                <Button
                    variant="noBorder"
                    svg={theme === "light" ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                    className={"h-8 w-full flex justify-center"}
                    onClick={() => handlerChangeTheme()}
                />
            </ul>
        </nav>
    );
};

Nav.propTypes = {
    setMenuOpen: PropTypes.func,
    headerBg: PropTypes.string,
    textColor: PropTypes.string
};

export default Nav