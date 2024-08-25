import Menu from "../menu/menu"
import Nav from "../nav/nav"
import Dropdown from "../dropdown/dropdown"
import PropTypes from 'prop-types'
import { useEffect } from "react"
import { useState } from "react"
import useTheme from "../../context/themeContext/hook/useTheme"
import useSection from "../../context/sectionContext/hook/useSection"


const Header = (props) => {

    const { className, menuOpen, setMenuOpen } = props
    const [headerBg, setHeaderBg] = useState("transparent");
    const [textColor, setColorText] = useState("white");
    const { theme } = useTheme()
    const { welcomeSection } = useSection()

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!menuOpen) {
                    setHeaderBg(entry.isIntersecting ? "transparent" : theme === "light" ? "white" : "black" );
                    setColorText(entry.isIntersecting ? "white" : theme === "light" ? "black" : "white");
                }
            },
            { threshold: 0.8 }
        );

        if (welcomeSection.current) {
            observer.observe(welcomeSection.current);
        }

        return () => {
            if (welcomeSection.current) {
                observer.unobserve(welcomeSection.current);
            }
        };
    }, [menuOpen,theme]);

    useEffect(() => {
        setColorText("white");
        setHeaderBg("transparent");
        if (menuOpen) {
            setHeaderBg(theme === "light" ? "white" : "black");
            setColorText(theme === "light" ? "black" : "white");
        }
    }, [menuOpen,theme]);

    const handlerMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className={`w-full pt-3 text-${textColor} bg-${headerBg} ${className} ${!menuOpen && "transition-colors duration-500"}`}>
                <div className="p-3">
                    <div className="w-full flex justify-center">
                        <div className=" w-full flex justify-between align-center items-center max-w-7xl">
                            <div>
                                <h1 className="font-bold text-xl">Daniel Leon Herrero</h1>
                            </div>
                            <div className="lg:hidden">
                                <Menu onClick={() => handlerMenu()} />
                            </div>
                            <div className="hidden lg:flex">
                                <Nav />
                            </div>
                        </div>
                    </div>
                </div>

                {menuOpen && <Dropdown className="flex flex-col items-center text-black bg-white text-center lg:hidden dark:bg-black dark:text-white">
                    <Nav />
                </Dropdown>}
            </div>
        </>
    )
}

Header.propTypes = {
    className: PropTypes.string,
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired
}

export default Header