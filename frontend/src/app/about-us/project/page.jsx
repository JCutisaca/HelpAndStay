"use client"
import about from '@/assets/images/about.jpg'
import Statistics from '@/components/Statistics/Statistics'
import WhatIsHelpAndStay from '@/components/WhatIsHelpAndStay/WhatIsHelpAndStay'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function AboutProjectPage() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="flex flex-col items-center w-full justify-center">
            <div className="w-[98vw] h-full relative cursor-pointer">
                <Image className="h-[15rem] md:h-[30.5rem] lg:h-[45rem] object-cover brightness-[70%]" alt="" src={about} />
                <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">About project</h1>
                </div>
            </div >
            <div className='gap-2 flex items-center mt-10 w-full'>
                <div className='gap-2 flex items-center text-sm'>
                    <p className='font-monserrat text-[#A4A0A0]'>Help&Stay</p>
                    <p>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#A4A0A0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                </div>
                <div className='gap-2 flex items-center text-sm'>
                    <p className='font-monserrat text-[#A4A0A0]'>About us</p>
                    <p>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#A4A0A0" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                </div>
                <div className='gap-2 flex items-center text-sm'>
                    <p className='font-monserrat text-[#000000]'>About project</p>
                </div>
            </div>
            <p className="font-monserrat text-sm md:text-base text-[#000000] mt-8">We imagine that the world will become better through travel, and that travels will become richer through connection. You share your life with the people you meet, fostering cultural exchange and mutual respect.</p>
            <WhatIsHelpAndStay />
            <Statistics />
            <div className='flex flex-col justify-center items-center mt-16 mb-16 gap-6'>
                <h1 className='font-unbounded font-semibold'>Our history</h1>
                <div>
                    <p className='font-monserrat text-base text-[#000000]'>Help&Stay started its activity in 2016 as a small passionate project, it all started because once we were also students and dreamed of seeing the world, but our financial possibilities did not allow it, so the idea of the project emerged.</p>
                    <p className='font-monserrat text-base text-[#000000]'>The main idea was to create a service that would be useful for both travelers and accommodation hosts.</p>
                </div>
            </div>
        </div>
    )
}