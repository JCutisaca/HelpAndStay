import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Providers/UserProvider/UserProvider"
import menuBurger from '@/assets/svg/menuBurger.svg'
import Image from "next/image"
import Link from "next/link"
import AboutDropDown from "../Dropdowns/AboutDropDown"

export default function MenuBurger() {
    const { user, setUser } = useContext(UserContext)
    const [menuBurgerModal, setMenuBurgerModal] = useState(false);
    const id = "menuBurgerModal";
    const closeHandler = () => setMenuBurgerModal(false);
    useEffect(() => {
        const handler = (event) => {
            if (event.target.id !== id) {
                closeHandler()
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, []);
    return (
        <>
            <div className={`${user?.email ? 'w-[15%]' : "w-[30%]"} relative md:hidden flex justify-end`}>
                <Image id="menuBurgerModal" onClick={() => setMenuBurgerModal(!menuBurgerModal)} className="w-9 h-9 cursor-pointer" alt="" src={menuBurger} />
                {menuBurgerModal && <AboutDropDown id={id} closeHandler={closeHandler} />}
            </div>
        </>
    )
}