import { useContext } from "react"
import { UserContext } from "../Providers/UserProvider/UserProvider"
import menuBurger from '@/assets/svg/menuBurger.svg'
import Image from "next/image"

export default function MenuBurger() {
    const { user, setUser } = useContext(UserContext)
    return (
        <>
            <div className={`${user?.email ? 'w-[15%]' : "w-[30%]"} md:hidden flex justify-end`}>
                <Image className="w-9 h-9" alt="" src={menuBurger} />
            </div>
        </>
    )
}