import Image from "next/image";
import findHost from '@/assets/images/findHost.jpg'
import host from '@/assets/images/host.jpg'
import arrowUp from '@/assets/svg/arrowUp.svg'

export default function ChooseHost () {
    return (
        <>
            <div className="flex flex-col lg:flex-row w-screen mt-32">
                <div className="w-full h-full relative cursor-pointer">
                    <Image className="h-[25rem] md:h-[30.5rem] lg:h-[45rem] object-cover" alt="" src={findHost} />
                    <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                        <p className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">Find host</p>
                        <Image className="md:w-8 lg:w-12" alt="" src={arrowUp} />
                    </div>
                </div>
                <div className="w-full h-full relative cursor-pointer">
                    <Image className="h-[25rem] md:h-[30.5rem] lg:h-[45rem] object-cover" alt="" src={host} />
                    <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                        <p className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">Host</p>
                        <Image className="md:w-8 lg:w-12" alt="" src={arrowUp} />
                    </div>
                </div>
            </div>
        </>
    )
}