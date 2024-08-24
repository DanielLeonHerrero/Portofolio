import Menu from "../menu/menu"
import Nav from "../nav/nav"
import Button from "../button/buton"
import ESIcon from "../svg/country/es"
import MoonIcon from "../svg/moon"
import Dropdown from "../dropdown/dropdown"
import PropTypes from 'prop-types'


const Header = (props) => {

    const { className, menuOpen, setMenuOpen } = props

    const handlerMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className={`w-full bg-transparent pt-3  ${className}`}>
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

                {menuOpen && <Dropdown className="flex flex-col items-center text-black bg-white text-center lg:hidden">
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