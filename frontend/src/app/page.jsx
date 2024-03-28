"use client"
import Image from "next/image";
import telephone from '@/assets/images/telephone.webp'
import towerEiffel from '@/assets/images/towerEiffel.webp'
import foodStand from '@/assets/images/foodStand.webp'
import hotAirBalloon from '@/assets/images/hotAirBalloon.webp'
import mausoleum from '@/assets/images/mausoleum.webp'
import statuesBuddha from '@/assets/images/statuesBuddha.webp'
import lanterns from '@/assets/images/lanterns.webp'
import { useTranslation } from "react-i18next";
import About from "@/components/About/About";
import LoginModal from "@/components/LoginModal/LoginModal";
import { useContext, useEffect, useState } from "react";
import RegisterModal from "@/components/RegisterModal/RegisterModal";
import { useSession } from "next-auth/react";
import { UserContext } from "@/components/Providers/UserProvider/UserProvider";
import axios from "axios";
import { userLoginGoogle } from "@/apiRequests/Register/userLoginGoogle";



export default function Home() {
  const [t, i18n] = useTranslation("global");
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { data: session } = useSession();
  const [previousSession, setPreviousSession] = useState(null);
  const closeModal = (event) => {
    if (event.target.id === "modal") {
      setLoginModal(false);
    }
    if (event.target.id === "registerModal") {
      setRegisterModal(false);
    }
  }
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (session?.user?.email && !user?.email && session !== previousSession) {
      userLoginGoogle(session, setUser)
      setPreviousSession(session);
    }
  }, [session])

  return (
    <div className="w-full">
      {!user?.email ? <div className="grid grid-cols-2 grid-rows-12 md:grid-cols-7 md:grid-rows-9 gap-4 w-full h-full max-h-[90vh]"><div className="flex items-center gap-4 w-full h-full justify-between col-span-2 md:hidden">
        <button onClick={() => setLoginModal(true)} className="flex items-center justify-center w-[inherit] h-[65%] text-xl font-monserrat font-semibold w-40 text-[#5196A6] border border-solid border-4 rounded-xl">Sign in</button>
        {loginModal &&
          <div onClick={closeModal} id="modal" className="overflow-y-auto inset-0 fixed top-0 left-0 w-full h-full z-10 bg-[#000000b3]">
            <LoginModal />
          </div>
        }
        <button onClick={() => setRegisterModal(true)} className="flex items-center justify-center w-[inherit] h-[65%] text-xl font-monserrat font-semibold w-40 text-white text-nowrap bg-[#5196A6] rounded-xl">Sign up</button>
        {registerModal &&
          <div onClick={closeModal} id="registerModal" className="block overflow-y-auto fixed top-0 left-0 w-full h-full z-10 bg-[#000000b3]">
            <RegisterModal />
          </div>
        }
      </div>
        <div className="flex col-span-2 row-span-2 md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-5">
          <Image className="object-cover w-full" alt="telephone" src={telephone}></Image>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 col-span-2 row-start-4 row-end-4 bg-white z-[1] h-full md:col-start-1 md:col-end-4 md:row-start-4 md:row-end-6">
          <div className="w-full h-[50%] flex items-center justify-center">
            <h1 className="font-unbounded text-3xl md:text-4xl lg:text-5xl">Where next?</h1>
          </div>
          <div className="w-full md:w-[80%] h-[50%] flex justify-end items-center">
            <button className="font-monserrat font-semibold md:h-[2.5rem] text-base text-white bg-[#F3A342] w-full rounded-xl md:w-[50%]">Join Help&Stay</button>
          </div>
        </div>
        <div className="col-span-1 row-start-5 row-end-9 md:col-start-5 md:row-start-1 md:row-end-9">
          <Image className="object-cover h-[100%]" alt="Tower Eiffel" src={towerEiffel}></Image>
        </div>
        <div className="col-starts-2 row-start-5 row-end-7 md:row-start-5 md:col-start-3 md:row-end-8 md:col-end-5 relative">
          <Image className="object-cover h-full" alt="Hot air balloon" src={hotAirBalloon}></Image>
        </div>
        <div className="col-start-2 row-start-7 row-end-9 md:row-start-6 md:col-start-1 md:row-end-9 md:col-end-3">
          <Image className="object-cover h-full" alt="Food stand China" src={foodStand}></Image>
        </div>
        <div className="flex col-start-1 col-end-3 row-start-9 row-end-12 md:col-start-6 md:col-end-8 md:row-start-2 md:row-end-5">
          <Image className="object-cover w-full" alt="Mausoleum" src={mausoleum}></Image>
        </div>
        <div className="invisible md:visible md:col-start-6 md:col-end-7 md:row-start-5 md:row-end-7">
          <Image className="object-cover w-full" alt="Statues Buddha" src={statuesBuddha}></Image>
        </div>
        <div className="invisible md:visible md:col-start-7 md:col-end-7 md:row-start-5 md:row-end-7">
          <Image className="object-cover w-full" alt="lanterns China" src={lanterns}></Image>
        </div>
      </div> : ""}
      <About />
    </div>
  );
}
