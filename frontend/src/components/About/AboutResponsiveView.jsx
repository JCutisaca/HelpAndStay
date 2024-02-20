import { useTranslation } from "react-i18next"
import Image from "next/image";
import airplane from '@/assets/svg/airplane.svg'
import handshake from '@/assets/svg/handshake.svg'
import home from '@/assets/svg/home.svg'
import happy from '@/assets/svg/happy.svg'

export default function AboutResponsiveView() {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <div className="md:hidden flex flex-col justify-center-row mt-10">
                <div className="flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#5196A6] p-6" src={airplane}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">Travel</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">Our service makes travel more affordable with <b>free accommodation</b>. Choose the direction and the host you can visit and go.</p>
                    </div>
                </div>

                <div className="mt-4 flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#72A689] p-6" src={handshake}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">Work</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">"Pay" for housing with an easy job that won't take you much time. You can choose the working conditions that suit you.</p>
                    </div>
                </div>
            </div>
            
            <div className="md:hidden flex flex-col justify-center-row mt-4">
                <div className="flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#F3A342] p-6" src={home}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">Host</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">By hosting guests at your home, the help you with work, you help them travel. Choose among those who want to stay at your place.</p>
                    </div>
                </div>

                <div className="mt-4 flex gap-2 flex-col items-center md:hidden h-40 w-full h-fit justify-between justify-between border-solid border-b-2 border-[#5196A6]">
                    <div className="w-full flex items-center gap-8">
                        <div className="w-[30%] flex justify-end items-center">
                            <Image className="w-[6rem] rounded-full border-solid border-4 border-[#BF9E80] p-6" src={happy}></Image>
                        </div>
                        <div className="w-[70%]">
                            <h3 className="font-monserrat font-semibold text-xl">Find friends</h3>
                        </div>
                    </div>
                    <div className="w-[95%] flex flex-col justify-center">
                        <p className="font-monserrat text-base">Make a cultural exchange. Find new friends, have fun and have an unforgettable time.</p>
                    </div>
                </div>
            </div>
        </>
    )
}