import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Providers/UserProvider/UserProvider"
import menuBurger from '@/assets/svg/menuBurger.svg'
import Image from "next/image"
import Link from "next/link"

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
                <Image id="menuBurgerId" onClick={() => setMenuBurgerModal(!menuBurgerModal)} className="w-9 h-9 cursor-pointer" alt="" src={menuBurger} />
                {menuBurgerModal && <div id={id} className='absolute bg-white flex flex-col top-14 w-32 right-0 z-[5] rounded-xl shadow-custom'>
                    <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat font-semibold" href={"/about"}>About us</Link>
                    <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat font-semibold" href={"/"}>Host</Link>
                    <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat font-semibold" href={"/"}>Find Host</Link>
                    <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat font-semibold" href={"/id"}>FAQ</Link>
                    <div className="absolute top-[-16px] right-7 w-0 h-0">
                        <div className="w-0 h-0 border-solid border-transparent border-[8px] border-b-white"></div>
                    </div>
                </div>}
            </div>
        </>
    )
}