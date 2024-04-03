"use client"
import faq from '@/assets/images/faq.jpg'
import AnyQuestions from '@/components/AnyQuestions/AnyQuestions';
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function AboutFaqPage() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="flex flex-col items-center w-full justify-center">
            <div className="w-[98vw] h-full relative cursor-pointer">
                <Image className="h-[15rem] md:h-[30.5rem] lg:h-[45rem] object-cover brightness-[70%]" alt="" src={faq} />
                <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">FAQ</h1>
                </div>
            </div >
            <div className='gap-2 flex items-center w-[98vw] bg-[#CCB199CC] pt-4 pl-4'>
                <div className='gap-2 flex items-center text-sm'>
                    <p className='font-monserrat text-[#EDEDED]'>Help&Stay</p>
                    <p>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#EDEDED" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                </div>
                <div className='gap-2 flex items-center text-sm'>
                    <p className='font-monserrat text-[#EDEDED]'>About us</p>
                    <p>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#EDEDED" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                </div>
                <div className='gap-2 flex items-center text-sm'>
                    <p className='font-monserrat text-white'>FAQ</p>
                </div>
            </div>
            <AnyQuestions />
        </div>
    )
}