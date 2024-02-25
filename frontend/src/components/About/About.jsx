"use client"
import { useTranslation } from "react-i18next";
import WhatIsHelpAndStay from "../WhatIsHelpAndStay/WhatIsHelpAndStay";
import Statistics from "../Statistics/Statistics";
import AnyQuestions from "../AnyQuestions/AnyQuestions";
import ChooseHost from "../ChooseHost/ChooseHost";


export default function About() {

    const [t, i18n] = useTranslation("global");

    return (
        <div className="flex flex-col items-center w-full justify-center">
            <div>
                <h2 className="font-monserrat font-semibold text-xl md:text-3xl md:text-5xl">{t("home.title")}</h2>
            </div>
            <WhatIsHelpAndStay />
            <Statistics />
            <ChooseHost />
            <AnyQuestions />
        </div>
    )
}