import about from '@/assets/images/about.jpg'
// import WhatIsHelpAndStay from '@/components/WhatIsHelpAndStay/WhatIsHelpAndStay'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
    const [t, i18n] = useTranslation("global");
    console.log(i18n);
    return (
        <div className="flex flex-col items-center w-full justify-center">
            <div className="w-[98vw] h-full relative cursor-pointer">
                <Image className="h-[15rem] md:h-[30.5rem] lg:h-[45rem] object-cover" alt="" src={about} />
                <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">About project</h1>
                </div>
            </div >
            <p className="font-monserrat text-sm md:text-base text-[#000000]">We imagine that the world will become better through travel, and that travels will become richer through connection. You share your life with the people you meet, fostering cultural exchange and mutual respect.</p>
            {/* <WhatIsHelpAndStay /> */}
        </div>
    )
}