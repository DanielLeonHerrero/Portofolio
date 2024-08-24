import Button from "../button/buton"
import HomeIcon from "../svg/home"
import SuitcaseIcon from "../svg/suitcase"
import ClipboardIcon from "../svg/clipboard"
import NavItem from "./navItem/navitem"
import ESIcon from "../svg/country/es"
import MoonIcon from "../svg/moon"
import ContactBook from "../svg/contactBook"

const handlerMoveToSection = () => {

}

const Nav = () => {
    return (
        <nav className="w-full">
            <ul className="flex flex-col items-center gap-3 lg:flex-row lg:gap-10">

                <NavItem
                    name="inicio"
                    svg={<HomeIcon className="w-6 h-6" />}
                    onClick={() => handlerMoveToSection()}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name="Trabajos"
                    svg={<SuitcaseIcon className="w-6 h-6" />}
                    onClick={() => handlerMoveToSection()}
                    className={"h-8 w-full flex justify-center"}
                />
                <NavItem
                    name="Proyectos"
                    svg={<ClipboardIcon className="w-6 h-6" />}
                    onClick={() => handlerMoveToSection()}
                    className={"h-8 w-full flex justify-center" }
                />
                <NavItem
                    name="Contacto"
                    svg={<ContactBook className="w-6 h-6" />}
                    onClick={() => handlerMoveToSection()}
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
                    svg={<MoonIcon className="w-6 h-6" />}
                    className={"h-8 w-full flex justify-center"}
                />
            </ul>
        </nav>
    );
};

export default Nav