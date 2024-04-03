"use client"
import safety from '@/assets/images/safety.jpg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function AboutSafetyPage() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="flex flex-col items-center w-full justify-center gap-4">
            <div className="w-[98vw] h-full relative cursor-pointer">
                <Image className="h-[15rem] md:h-[30.5rem] lg:h-[45rem] object-cover brightness-[70%]" alt="" src={safety} />
                <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">Safety rules</h1>
                </div>
            </div >
            <div className='gap-2 flex items-center w-full'>
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
                    <p className='font-monserrat text-[#000000]'>Safety</p>
                </div>
            </div>
            <div className='w-full flex justify-start'>
                <h2 className='font-monserrat'>Basics of security</h2>
            </div>
            <div className='w-full flex flex-col gap-4 mb-16'>
                <div>
                    <h3 className='font-monserrat font-semibold text-sm'>✅ Your safety is important. Take it seriously</h3>
                    <p className='font-monserrat text-sm'>Review profiles and links carefully.
                        Read what members are saying about themselves and what other members are saying about them. Give yourself time to carefully read all available information and do not compromise. If you're uncomfortable, keep looking.
                        At the same time, remember that each ad is carefully checked by our moderators.</p>
                </div>
                <div>
                    <h3 className='font-monserrat font-semibold text-sm'>✅ Give preference to verified users</h3>
                    <p className='font-monserrat text-sm'>Verification identifies and establishes the identity of the service user by checking the provided documents and confirming them. Why is verification important? Read more</p>
                </div>
                <div>
                    <h3 className='font-monserrat font-semibold text-sm'>✅ Trust your instincts</h3>
                    <p className='font-monserrat text-sm'>If a person, situation, or profile seems dangerous for any reason, move on. Don't worry about coming across as rude. Clearly define your boundaries and do not hesitate to state them. If someone at Help&Stay makes you uncomfortable, you can contact the support service and report the violation. Communicate clearly with others and take care of yourself. If you are uncomfortable staying alone with any of the members, consider staying as families or couples.</p>
                </div>
                <div>
                    <h3 className='font-monserrat font-semibold text-sm'>✅ Be aware of the culture where you are traveling</h3>
                    <p className='font-monserrat text-sm'>Make sure you are aware of cultural and religious differences, sensitivities, and general safety guidelines for each location you travel to. Gender roles and expectations can vary greatly.</p>
                </div>
                <div>
                    <h3 className='font-monserrat font-semibold text-sm'>✅ Report a negative experience</h3>
                    <p className='font-monserrat text-sm'>Our trust and security team is here to help build the safest and most trusted community. Reporting security issues to Help&Stay helps protect future users.</p>
                </div>
            </div>
        </div>
    )
}