import { useState } from "react"
import Menu from "../menu/menu"
import Nav from "../nav/nav"
import Button from "../button/buton"
import ESIcon from "../svg/country/es"
import MoonIcon from "../svg/moon"



const Header = (props) => {

    const { className } = props

    const [menuOpen, setMenuOpen] = useState(false)

    const handlerMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={`w-full bg-transparent p-5 ${className}`}>
            <div className="w-full flex justify-center">
                <div className=" w-full flex justify-between align-center items-center max-w-7xl">
                    <div>
                        <h1 className="font-bold text-xl">Daniel Leon Herrero</h1>
                    </div>
                    <div className="lg:hidden">
                        <Menu onClick={() => handlerMenu()} />
                    </div>
                    <div className="hidden lg:flex lg:items-center gap-5">
                        <Nav />
                        <Button variant="noBorder" text={"Español"} svg={<ESIcon className="w-6 h-6"/>}/>
                        <Button variant="noBorder" svg={<MoonIcon className="w-6 h-6" />} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header