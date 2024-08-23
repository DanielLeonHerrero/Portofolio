import Button from "../button/buton"
import Clipboard from "../svg/clipboard"
import Download from "../svg/download"
import Home from "../svg/home"
import Suitcase from "../svg/suitcase"
import NavItem from "./navItem/navitem"

const handlerMoveToSection = () => {

}


const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-10">

                <NavItem
                    name="inicio"
                    svg={<Home className="w-8 h-8"/>}
                    onClick={() => handlerMoveToSection()}
                />
                <NavItem 
                    name="Trabajos" 
                    svg={<Suitcase className="w-6 h-6"/>} 
                    onClick={() => handlerMoveToSection()} 
                />
                <NavItem 
                    name="Proyectos" 
                    svg={<Clipboard className="w-6 h-6" />} 
                    onClick={() => handlerMoveToSection()} 
                />

                <Button variant="header" svg={<Download className="w-6 h-5"/>}/>
            </ul>
        </nav>
    )
}

export default Nav