import Image from "next/image";
import arrowLeft from '@/assets/svg/arrowLeft.svg'


export default function AnyQuestions() {
    return (
        <div className="w-[99.5vw] bg-[#CCB199CC] lg:h-[25rem] items-center flex flex-col lg:flex-row pb-12 lg:pb-0">
            <div className="w-full flex justify-center m-10 lg:m-0">
                <div className="flex items-center lg:h-[15rem] lg:w-[65%] lg:border-solid lg:border-r-2 border-white">
                    <h4 className="font-unbounded text-white text-xl md:text-3xl">Any questions?</h4>
                </div>
            </div>
            <div className="flex flex-col w-[85%]">
                <div className="w-full lg:w-[85%] border-solid flex justify-between border-b-2 border-t-2 border-white">
                    <a className="flex justify-between w-full" href="/1">
                        <p className="text-white font-monserrat text-sm md:text-lg lg-font-semibold">What is Help&Stay?</p>
                        <Image className="w-4 md:w-8" alt="" src={arrowLeft} />
                    </a>
                </div>
                <div className="w-full lg:w-[85%] border-solid flex justify-between border-b-2 border-white">
                    <a className="flex justify-between w-full" href="/2">
                        <p className="text-white font-monserrat text-sm md:text-lg lg-font-semibold">Is it safe?</p>
                        <Image className="w-4 md:w-8" alt="" src={arrowLeft} />
                    </a>
                </div>
                <div className="w-full lg:w-[85%] border-solid flex justify-between border-b-2 border-white">
                    <a className="flex justify-between w-full" href="/3">
                        <p className="text-white font-monserrat text-sm md:text-lg lg-font-semibold">What kind of work do I have to do?</p>
                        <Image className="w-4 md:w-8" alt="" src={arrowLeft} />
                    </a>
                </div>
                <div className="w-full lg:w-[85%] border-solid flex justify-between border-b-2 border-white">
                    <a className="flex justify-between w-full" href="/4">
                        <p className="text-white font-monserrat text-sm md:text-lg lg-font-semibold">What is verification?</p>
                        <Image className="w-4 md:w-8" alt="" src={arrowLeft} />
                    </a>
                </div>
                <div className="w-full lg:w-[85%] border-solid flex justify-between border-b-2 border-white">
                    <a className="flex justify-between w-full" href="/5">
                        <p className="text-white font-monserrat text-sm md:text-lg lg-font-semibold">How to find housing?</p>
                        <Image className="w-4 md:w-8" alt="" src={arrowLeft} />
                    </a>
                </div>
                <div className="w-full lg:w-[85%] border-solid flex justify-between border-b-2 border-white">
                    <a className="flex justify-between w-full" href="/6">
                        <p className="text-white font-monserrat text-sm md:text-lg lg-font-semibold">How to host guest?</p>
                        <Image className="w-4 md:w-8" alt="" src={arrowLeft} />
                    </a>
                </div>
                <div className="w-full lg:w-[85%] border-solid flex justify-between border-b-2 border-white">
                    <a className="flex justify-between w-full" href="/7">
                        <p className="text-white font-monserrat text-sm md:text-lg lg-font-semibold">Where to report violations?</p>
                        <Image className="w-4 md:w-8" alt="" src={arrowLeft} />
                    </a>
                </div>
            </div>
        </div>
    )
}