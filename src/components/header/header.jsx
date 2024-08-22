import { useState } from "react"
import Menu from "../menu/menu"
import Nav from "../nav/nav"



const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handlerMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="w-full bg-red-500 p-5">
            <div className="w-full flex justify-center">
                <div className=" w-full flex justify-between align-center items-center max-w-5xl">
                    <div>
                        <h1 className="font-bold text-xl">Daniel Leon Herrero</h1>
                    </div>
                    <div className="flex md:hidden">
                        <Menu onClick={() => handlerMenu()} />
                    </div>
                    <div className="hidden md:flex">
                        <Nav />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header