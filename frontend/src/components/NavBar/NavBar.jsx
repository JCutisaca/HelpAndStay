import Link from "next/link";
import IconHelpAndStay from "../utils/IconHelpAndStay";
import Image from "next/image";
import LoginModal from "../LoginModal/LoginModal";
import React, { useContext, useEffect, useRef, useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import { UserContext } from "../Providers/UserProvider/UserProvider";
import notification from '@/assets/svg/notification.svg'
import arrowDown from '@/assets/svg/arrowDown.svg'
import { useTranslation } from "react-i18next";
import MenuBurger from "../MenuBurger/MenuBurger";
import UserDropDown from "../utils/User/UserDropDown";




export default function NavBar() {

    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [userDropDownModal, setUserDropDownModal] = useState(false);
    const [t, i18n] = useTranslation("global");
    const { user, setUser } = useContext(UserContext);
    const closeModal = (event) => {
        if (event.target.id === "modal") {
            setLoginModal(false);
        }
        if (event.target.id === "registerModal") {
            setRegisterModal(false);
        }
    }

    useEffect(() => {
        if (userDropDownModal) {
            const handler = (event) => {
                if (event.target.id !== "userDropDownModalId" && event.target.id !== "userDropDownMenu") {
                    setUserDropDownModal(false);
                }
            };
            document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler);
            }
        }
    }, [userDropDownModal]);


    return (
        <nav className="flex w-full fixed top-0 z-10 pl-4 pr-4 items-center md:justify-around h-20 bg-white">
            <div className="flex items-center md:justify-around w-[70%] h-[100%">
                <IconHelpAndStay></IconHelpAndStay>
                <Link className="hidden md:inline-block text-base font-monserrat font-semibold" href={"/"}>About us</Link>
                <Link className="hidden md:inline-block text-base font-monserrat font-semibold" href={"/"}>Host</Link>
                <Link className="hidden md:inline-block text-base font-monserrat font-semibold" href={"/"}>Find Host</Link>
                {!user?.email ? <Link className="hidden md:inline-block text-base font-monserrat font-semibold" href={"/"}>FAQ</Link> : ""}
            </div>
            {!user?.email ?
                <div className="hidden md:flex gap-4 w-[30%]">
                    <button onClick={() => setLoginModal(true)} className="text-base font-monserrat font-semibold w-40 text-[#5196A6] border border-solid border-4 rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-[#F3A342] transition-all duration-500">Sign in</button>

                    <button onClick={() => setRegisterModal(true)} className="text-base font-monserrat font-semibold w-40 text-white text-nowrap bg-[#5196A6] rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-none transition-all duration-500">Sign up</button>
                </div>
                :
                <div className="relative flex justify-end gap-0 w-fit md:w-[40%]">
                    <button className="hidden md:inline-block text-base font-monserrat font-semibold w-fit flex items-center">
                        <Image className="w-8" src={notification} alt=""></Image>
                    </button>
                    <div className="hidden md:flex w-24 items-center">
                        <p className="hidden w-full md:font-monserrat font-semibold md:inline-block md:truncate items-center">
                            {user?.firstName}
                        </p>
                    </div>
                    <div id="userDropDownModalId"
                        onClick={(event) => {
                            if (event.target.id === "userDropDownModalId") {
                                setUserDropDownModal(!userDropDownModal)
                            }
                        }} className="cursor-pointer flex w-fit items-center top-0 relative">
                        <div id="userDropDownModalId" className="flex">
                            <Image id="userDropDownModalId" alt="" width={"32"} height={"32"} className="w-12 h-full object-cover rounded-full" src={user?.image}></Image>
                            <Image id="userDropDownModalId" alt="" className="w-6" src={arrowDown} />
                        </div>
                        {userDropDownModal && <UserDropDown />}
                    </div>
                    <div className="hidden md:flex items-center ml-8">
                        <button className="flex h-fit">
                            <p className={`font-monserrat ${i18n.language === 'en' ? 'font-semibold text-black' : ""}`}>En</p>
                            <span>|</span>
                            <p className={`font-monserrat ${i18n.language === 'es' ? 'font-semibold text-black' : ""}`}>Es</p>
                        </button>
                    </div>
                </div>
            }
            {loginModal &&
                <div onClick={closeModal} id="modal" className="fixed top-0 overflow-y-auto left-0 w-full h-full z-10 bg-[#000000b3]">
                    <LoginModal />
                </div>
            }
            {registerModal &&
                <div onClick={closeModal} id="registerModal" className="block fixed overflow-y-auto top-0 left-0 w-full h-full z-10 bg-[#000000b3]">
                    <RegisterModal />
                </div>
            }
            <MenuBurger />
        </nav>
    )
}