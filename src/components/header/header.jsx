import Menu from "../menu/menu"
import Nav from "../nav/nav"
import Dropdown from "../dropdown/dropdown"
import PropTypes from 'prop-types'
import { useEffect } from "react"
import { useState } from "react"
import useTheme from "../../context/themeContext/hook/useTheme"


const Header = (props) => {

    const { className, menuOpen, setMenuOpen, sectionRef } = props
    const [headerBg, setHeaderBg] = useState("transparent");
    const [textColor, setColorText] = useState("white");
    const { theme } = useTheme()

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!menuOpen) {
                    setHeaderBg(entry.isIntersecting ? theme === "light" ? "white" : "black" : "transparent");
                    setColorText(entry.isIntersecting ? theme === "light" ? "black" : "white" : "white");
                }
            },
            { threshold: 0.06 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
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
            <div className={`w-full pt-3 text-${textColor} bg-${headerBg} ${className} transition-colors duration-500`}>
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
    setMenuOpen: PropTypes.func.isRequired,
    sectionRef: PropTypes.object.isRequired
}

export default Header