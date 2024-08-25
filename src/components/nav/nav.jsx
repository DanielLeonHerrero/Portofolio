import Button from "../button/buton"
import HomeIcon from "../svg/home"
import SuitcaseIcon from "../svg/suitcase"
import ClipboardIcon from "../svg/clipboard"
import NavItem from "./navItem/navitem"
import ESIcon from "../svg/country/es"
import MoonIcon from "../svg/moon"
import ContactBook from "../svg/contactBook"
import useTheme from "../../context/themeContext/hook/useTheme"
import SunIcon from "../svg/sun"
import useSection from "../../context/sectionContext/hook/useSection"


const Nav = () => {
    const { toggleTheme, theme } = useTheme()
    const { workSection, welcomeSection, projectSection, contactSection, handleScroll } = useSection()

    const handlerChangeLanguage = () => { }

    const handlerChangeTheme = () => {
        toggleTheme()
    }


    return (
        <nav className="w-full">
            <ul className="flex flex-col items-center gap-3 lg:flex-row lg:gap-10">

                <NavItem
                    name="inicio"
                    svg={<HomeIcon className="w-6 h-6" />}
                    onClick={() => handleScroll(welcomeSection)}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name="Trabajos"
                    svg={<SuitcaseIcon className="w-6 h-6" />}
                    onClick={() => handleScroll(workSection)}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name="Proyectos"
                    svg={<ClipboardIcon className="w-6 h-6" />}
                    onClick={() => handleScroll(projectSection)}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name="Contacto"
                    svg={<ContactBook className="w-6 h-6" />}
                    onClick={() => handleScroll(contactSection)}
                    className={"h-8 w-full flex justify-center"}
                />

                <Button
                    variant="noBorder"
                    text={"Español"}
                    svg={<ESIcon className="w-6 h-6" />}
                    className={"h-8 w-full flex justify-center"}
                />
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

export default Nav