import NavItem from "./navItem/navitem"


const Nav = () => {
    return (
        <nav>
            <ul className="flex gap-10">
                <NavItem name="inicio" svg="home" onClick={() => console.log("test")}/>
            </ul>
        </nav>
    )
}

export default Nav