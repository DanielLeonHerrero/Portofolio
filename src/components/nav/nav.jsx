import Button from "../button/buton"
import HomeIcon from "../svg/home"
import SuitcaseIcon from "../svg/suitcase"
import ClipboardIcon from "../svg/clipboard"
import NavItem from "./navItem/navitem"

const handlerMoveToSection = () => {

}


const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-10">

                <NavItem
                    name="inicio"
                    svg={<HomeIcon className="w-8 h-8"/>}
                    onClick={() => handlerMoveToSection()}
                />
                <NavItem 
                    name="Trabajos" 
                    svg={<SuitcaseIcon className="w-6 h-6"/>} 
                    onClick={() => handlerMoveToSection()} 
                />
                <NavItem 
                    name="Proyectos" 
                    svg={<ClipboardIcon className="w-6 h-6" />} 
                    onClick={() => handlerMoveToSection()} 
                />
            </ul>
        </nav>
    )
}

export default Nav