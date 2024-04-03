"use client"
import { useTranslation } from "react-i18next";
import WhatIsHelpAndStay from "../WhatIsHelpAndStay/WhatIsHelpAndStay";
import Statistics from "../Statistics/Statistics";
import AnyQuestions from "../AnyQuestions/AnyQuestions";
import ChooseHost from "../ChooseHost/ChooseHost";
import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider/UserProvider";
import Image from "next/image";


export default function About() {

    const [t, i18n] = useTranslation("global");
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="flex flex-col items-center w-full justify-center">
            {!user?.email ? <>
                <div>
                    <h2 className="font-monserrat font-semibold text-xl md:text-3xl md:text-5xl">{t("home.title")}</h2>
                </div>
                <WhatIsHelpAndStay />
                <div className="mt-4 w-[98vw] flex justify-center h-[40rem] md:h-[50rem] relative">
                    <div className="absolute w-[80%] top-[80%] md:w-fit md:top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 border border-solid border-[3px] border-white p-4 text-center">
                        <h4 className="font-monserrat font-semibold text-white text-base md:text-5xl">{t("home.experiencePhrase.textOne")}</h4>
                        <h4 className="font-monserrat font-semibold text-white text-base md:text-5xl">{t("home.experiencePhrase.textTwo")}</h4>
                    </div>
                    <Image className="w-full h-full object-center object-cover" alt="" width={1280} height={720} src={"https://res.cloudinary.com/dvuhnhe50/image/upload/v1708461949/HelpAndStay/Trolltunga_n7lpp3.jpg"}></Image>
                </div>
                <Statistics />
            </> : ""}
            <ChooseHost />
            {!user?.email ? <AnyQuestions /> : ""}
        </div>
    )
}