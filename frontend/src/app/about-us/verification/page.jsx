"use client"
import verification from '@/assets/images/verification.jpg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function AboutVerificationPage() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="flex flex-col items-center w-full justify-center gap-4">
            <div className="w-[98vw] h-full relative cursor-pointer">
                <Image className="h-[15rem] md:h-[30.5rem] lg:h-[45rem] object-cover brightness-[70%]" alt="" src={verification} />
                <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">Verification</h1>
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
                    <p className='font-monserrat text-[#000000]'>Verification</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 mb-16'>
                <div>
                    <h2 className='font-monserrat font-semibold'>What is verification?</h2>
                    <div className='flex items-center'>
                        <p className='font-monserrat text-sm'>Verification - confirmation of the authenticity of the name and address. This is a paid service that costs $20. You can do it at any time. A verified user is marked with a green checkmark
                            <button className='ml-2'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#72A689" />
                                </svg>
                            </button>
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='font-monserrat font-semibold'>Why is verification needed?</h2>
                    <div className='flex items-center'>
                        <p className='font-monserrat text-sm'>
                            Our service pays a lot of attention to security, which is why we carefully screen new users when registering. Verification is another way of checking and confirming the identity and address at which housing will be provided. <span className='font-medium'>When choosing a host or generator, we recommend giving preference to verified users.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 mb-16'>
                <h2 className='font-monserrat font-semibold'>How does it work?</h2>
                <p className='font-monserrat text-sm'>Confirmation takes place in several stages:</p>
                <div>
                    <div className='flex items-end gap-1'>
                        <p className='font-unbounded text-5xl text-[#5196A6]'>01</p>
                        <p className='font-monserrat text-sm text-[#5196A6]'>step</p>
                    </div>
                    <p className='font-monserrat text-sm'>
                        The user registers his name and address in the system, while the possibility of further changes to this information is blocked.
                    </p>
                </div>
                <div>
                    <div className='flex items-end gap-1'>
                        <p className='font-unbounded text-5xl text-[#72A689]'>02</p>
                        <p className='font-monserrat text-sm text-[#72A689]'>step</p>
                    </div>
                    <p className='font-monserrat text-sm'>
                        The user registers his name and address in the system, while the possibility of further changes to this information is blocked.
                    </p>
                </div>
                <div>
                    <div className='flex items-end gap-1'>
                        <p className='font-unbounded text-5xl text-[#F2A341]'>03</p>
                        <p className='font-monserrat text-sm text-[#F2A341]'>step</p>
                    </div>
                    <p className='font-monserrat text-sm'>
                        The user registers his name and address in the system, while the possibility of further changes to this information is blocked.
                    </p>
                </div>
                <div>
                    <div className='flex items-end gap-1'>
                        <p className='font-unbounded text-5xl text-[#BF9E80]'>04</p>
                        <p className='font-monserrat text-sm text-[#BF9E80]'>step</p>
                    </div>
                    <p className='font-monserrat text-sm'>
                        The user registers his name and address in the system, while the possibility of further changes to this information is blocked.
                    </p>
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex justify-between gap-2 w-full'>
                        <p className='font-monserrat font-medium md:w-72'>Click on the button for verification 👇🏻</p>
                        <p className='font-monserrat font-medium md:w-72'>Do you have any questions?</p>
                    </div>
                    <div className='flex justify-between gap-2 w-full h-full'>
                        <button className="flex items-center justify-center w-full md:w-72 h-full text-base font-monserrat font-semibold text-white border border-solid border-4 border-[#5196A6] bg-[#5196A6] rounded-xl">Verification</button>
                        <button className="flex items-center justify-center w-full md:w-72 h-full text-base font-monserrat font-semibold text-[#5196A6] border border-solid border-4 rounded-xl">Support</button>
                    </div>
                </div>
            </div>
        </div>
    )
}