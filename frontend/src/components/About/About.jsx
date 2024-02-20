import { useTranslation } from "react-i18next"
import Image from "next/image";
import airplane from '@/assets/svg/airplane.svg'
import handshake from '@/assets/svg/handshake.svg'
import home from '@/assets/svg/home.svg'
import happy from '@/assets/svg/happy.svg'


export default function About() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="flex flex-col items-center w-full justify-center">
            <div>
                <h2 className="font-monserrat font-semibold text-xl md:text-3xl md:text-5xl">{t("home.title")}</h2>
            </div>
            <div className="flex flex-col lg:flex-row mt-24">
                <div className="flex h-40 w-full lg:w-full lg:w-[50%]">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-32 rounded-full border-solid border-4 border-[#5196A6] p-6" src={airplane}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-3xl">Travel</h3>
                        <p className="font-monserrat text-base md:text-base">Our service makes travel more affordable with <b>free accommodation</b>. Choose the direction and the host you can visit and go.</p>
                    </div>
                </div>
                <div className="flex h-40 w-full lg:w-[50%]">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-32 rounded-full border-solid border-4 border-[#72A689] p-6" src={handshake}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-3xl">Work</h3>
                        <p className="font-monserrat text-base md:text-base">"Pay" for housing with an easy job that won't take you much time. You can choose the working conditions that suit you.</p>
                    </div>
                </div>
            </div>
            
            
            <div className="flex flex-col lg:flex-row lg:mt-24">
                <div className="flex h-40 w-full lg:w-full lg:w-[50%]">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-32 rounded-full border-solid border-4 border-[#F3A342] p-6" src={home}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-3xl">Host</h3>
                        <p className="font-monserrat text-base md:text-base">Our service makes travel more affordable with <b>free accommodation</b>. Choose the direction and the host you can visit and go.</p>
                    </div>
                </div>
                <div className="flex h-40 w-full lg:w-[50%]">
                    <div className="w-[30%] flex justify-center items-center">
                        <Image className="w-24 lg:w-32 rounded-full border-solid border-4 border-[#BF9E80] p-6" src={happy}></Image>
                    </div>
                    <div className="w-[70%] flex flex-col justify-center">
                        <h3 className="font-monserrat font-semibold text-xl md:text-3xl">Find friends</h3>
                        <p className="font-monserrat text-base md:text-base">"Pay" for housing with an easy job that won't take you much time. You can choose the working conditions that suit you.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}