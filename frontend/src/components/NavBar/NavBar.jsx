import Link from "next/link";
import IconHelpAndStay from "../utils/IconHelpAndStay";
import Image from "next/image";
import menuBurger from '@/assets/svg/menuBurger.svg'
import { signIn } from 'next-auth'
import LoginModal from "../LoginModal/LoginModal";
import React, { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";




export default function NavBar() {

    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const closeModal = (event) => {
        if (event.target.id === "modal") {
            setLoginModal(false);
        }
        if (event.target.id === "registerModal") {
            setRegisterModal(false);
        }
    }

    return (
        <nav className="flex items-center md:justify-around h-20 bg-white">
            <div className="flex items-center md:justify-around w-[70%] h-[100%">
                <IconHelpAndStay></IconHelpAndStay>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>About us</Link>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>Host</Link>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>Find Host</Link>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>FAQ</Link>
            </div>
            <div className="hidden md:flex gap-4 w-[30%]">
                <button onClick={() => setLoginModal(true)} className="text-xl font-monserrat font-semibold w-40 text-[#5196A6] border border-solid border-4 rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-[#F3A342] transition-all duration-500">Sign in</button>

                <button onClick={() => setRegisterModal(true)} className="text-xl font-monserrat font-semibold w-40 text-white text-nowrap bg-[#5196A6] rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-none transition-all duration-500">Sign up</button>
            </div>
            {loginModal &&
                <div onClick={closeModal} id="modal" className="fixed top-0 left-0 w-full h-full z-[3] bg-[#000000b3]">
                    <LoginModal />
                </div>
            }
            {registerModal &&
                <div onClick={closeModal} id="registerModal" className="fixed top-0 left-0 w-full h-full z-[3] bg-[#000000b3]">
                    <RegisterModal />
                </div>
            }
            <div className="md:hidden flex w-[30%] justify-end">
                <Image className="w-9 h-9" alt="" src={menuBurger} />
            </div>
        </nav>
    )
}