import Image from "next/image";

export default function Statistics() {
    return (
        <>
            <div className="mt-4 w-[99.5vw] flex justify-center h-[40rem] md:h-[50rem] relative">
                <div className="absolute w-[80%] top-[80%] md:w-fit md:top-[20%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 border border-solid border-[3px] border-white p-4">
                    <h4 className="font-monserrat font-semibold text-white text-base md:text-5xl">The one who lives sees a lot.</h4>
                    <h4 className="font-monserrat font-semibold text-white text-base md:text-5xl">Those who travel see more</h4>
                </div>
                <Image className="w-full h-full object-center object-cover" alt="" width={1280} height={720} src={"https://res.cloudinary.com/dvuhnhe50/image/upload/v1708461949/HelpAndStay/Trolltunga_n7lpp3.jpg"}></Image>
            </div>
            <div className="w-full flex flex-col items-center mt-32">
                <h5 className="font-unbounded md:text-5xl">Some statistics</h5>
                <div className="w-full flex flex-col md:flex-col lg:flex-row justify-around mt-16">
                    <div className="flex w-full flex-col md:flex-row justify-around gap-6">
                        <div className="flex flex-col items-center gap-4 md:border-b-0 border-solid border-b-2 border-[#5196A6]">
                            <p className="font-unbounded text-5xl text-[#5196A6]">150 435</p>
                            <p className="font-monserrat font-semibold text-lg">Users of our service</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 md:border-b-0 border-solid border-b-2 border-[#5196A6]">
                            <p className="font-unbounded text-5xl text-[#72A689]">186</p>
                            <p className="font-monserrat font-semibold text-lg">Countries for travel</p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row justify-around mt-6 lg:mt-0 gap-6">
                        <div className="flex flex-col items-center gap-4 md:border-b-0 border-solid border-b-2 border-[#5196A6]">
                            <p className="font-unbounded text-5xl text-[#F2A341]">45 384</p>
                            <p className="font-monserrat font-semibold text-lg">Homes visited</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <p className="font-unbounded text-5xl text-[#BF9E80]">43 586</p>
                            <p className="font-monserrat font-semibold text-lg">Positive reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}