import { useTranslation } from "react-i18next"
import Image from "next/image";
import airplane from '@/assets/svg/airplane.svg'
import handshake from '@/assets/svg/handshake.svg'
import home from '@/assets/svg/home.svg'
import happy from '@/assets/svg/happy.svg'


export default function WhatIsHelpAndStay() {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <div className="hidden md:flex flex-col justify-center lg:gap-16 lg:flex-row mt-24">
                <div className="flex h-40 w-full lg:w-[40%] justify-between justify-between border-solid border-b-2 border-[#5196A6] lg:border-b-0">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-28 rounded-full border-solid border-4 border-[#5196A6] p-6" alt="" src={airplane}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-2xl">{t("home.travel.title")}</h3>
                        <p className="font-monserrat text-base md:text-base">{t("home.travel.content")}<b>{t("home.travel.contentStrong")}</b>{t("home.travel.contentEnd")}</p>
                    </div>
                </div>
                <div className="flex h-40 w-full lg:w-[40%] justify-between justify-between border-solid border-b-2 border-[#5196A6] lg:border-b-0">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-28 rounded-full border-solid border-4 border-[#72A689] p-6" alt="" src={handshake}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-2xl">{t("home.work.title")}</h3>
                        <p className="font-monserrat text-base md:text-base">{t("home.work.content")}</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col justify-center lg:gap-16 lg:flex-row lg:mt-24">
                <div className="flex h-40 w-full lg:w-[40%] justify-between border-solid border-b-2 border-[#5196A6] lg:border-b-0">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-28 rounded-full border-solid border-4 border-[#F3A342] p-6" alt="" src={home}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-2xl">{t("home.hostHAS.title")}</h3>
                        <p className="font-monserrat text-base md:text-base">{t("home.hostHAS.content")}</p>
                    </div>
                </div>
                <div className="flex h-40 w-full lg:w-[40%] justify-between border-solid border-b-2 border-[#5196A6] lg:border-b-0">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-28 rounded-full border-solid border-4 border-[#BF9E80] p-6" alt="" src={happy}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-2xl">{t("home.findFriends.title")}</h3>
                        <p className="font-monserrat text-base md:text-base">{t("home.findFriends.content")}</p>
                    </div>
                </div>
            </div>

            <div className="md:hidden flex flex-col justify-center-row mt-10">
                <div className="flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#5196A6] p-6" alt="" src={airplane}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">{t("home.travel.title")}</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">{t("home.travel.content")}<b>{t("home.travel.contentStrong")}</b>{t("home.travel.contentEnd")}</p>
                    </div>
                </div>

                <div className="mt-4 flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#72A689] p-6" alt="" src={handshake}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">{t("home.work.title")}</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">{t("home.work.content")}</p>
                    </div>
                </div>
            </div>
            
            <div className="md:hidden flex flex-col justify-center-row mt-4">
                <div className="flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#F3A342] p-6" alt="" src={home}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">{t("home.hostHAS.title")}</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">{t("home.hostHAS.content")}</p>
                    </div>
                </div>

                <div className="mt-4 flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#BF9E80] p-6" alt="" src={happy}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">{t("home.findFriends.title")}</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">{t("home.findFriends.content")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}