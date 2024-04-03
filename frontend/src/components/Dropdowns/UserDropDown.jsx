import Image from "next/image"
import userProfile from '@/assets/svg/userProfile.svg'
import message from '@/assets/svg/message.svg'
import settings from '@/assets/svg/settings.svg'
import logOut from '@/assets/svg/logOut.svg'
import { signOut } from 'next-auth/react'
import { useContext } from "react"
import { UserContext } from "@/components/Providers/UserProvider/UserProvider"
import { useTranslation } from "react-i18next"


export default function UserDropDown() {
    const id = "userDropDownMenu";
    const { user, setUser } = useContext(UserContext);
    const [t, i18n] = useTranslation("global")
    const handleSignOut = () => {
        signOut({ redirect: false })
        setUser()
    }

    return (
        <div id={id} className='absolute bg-white flex flex-col top-16 w-32 right-[15px] z-[5] rounded-xl shadow-custom'>
            <button id={id} className="flex p-2 gap-2 items-center md:hover:bg-[#f0f4f9] md:rounded-t-xl">
                <Image id={id} className="w-5" alt="" src={userProfile}></Image>
                <p id={id} className="font-monserrat text-base text-black font-semibold text-left">{t("navbar.userDropdown.profile")}</p>
            </button>
            <button id={id} className="flex p-2 gap-2 items-center md:hover:bg-[#f0f4f9]">
                <Image id={id} className="w-5" alt="" src={message}></Image>
                <p id={id} className="font-monserrat text-base text-black font-semibold text-left">{t("navbar.userDropdown.messages")}</p>
            </button>
            <button id={id} className="flex p-2 gap-2 items-center md:hover:bg-[#f0f4f9]">
                <Image id={id} className="w-5" alt="" src={settings}></Image>
                <p id={id} className="font-monserrat text-base text-black font-semibold text-left">{t("navbar.userDropdown.settings")}</p>
            </button>
            <button onClick={handleSignOut} id={id} className="flex p-2 gap-2 items-center md:hover:bg-[#f0f4f9] md:rounded-b-xl">
                <Image id={id} className="w-5" alt="" src={logOut}></Image>
                <p id={id} className="font-monserrat text-base text-black font-semibold text-left">{t("navbar.userDropdown.logOut")}</p>
            </button>
            <div id={id} className="absolute top-[-16px] right-10 w-0 h-0">
                <div id={id} className="w-0 h-0 border-solid border-transparent border-[8px] border-b-white"></div>
            </div>
        </div>
    )
}