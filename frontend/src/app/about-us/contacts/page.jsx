"use client"
import contacts from '@/assets/images/contacts.jpg'
import Image from 'next/image'
import Link from 'next/link';
import { useTranslation } from 'react-i18next'
import telephone from '@/assets/svg/telephone.svg'

export default function AboutContactsPage() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="flex flex-col items-center w-full justify-center gap-4">
            <div className="w-[98vw] h-full relative cursor-pointer">
                <Image className="h-[15rem] md:h-[30.5rem] lg:h-[45rem] object-cover brightness-[70%]" alt="" src={contacts} />
                <div className="w-fit top-[80%] lg:top-[90%] right-[50%] left-[50%] flex absolute transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="font-monserrat font-semibold text-white text-xl md:text-3xl lg:text-5xl text-nowrap">Contacts</h1>
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
                    <p className='font-monserrat text-[#000000]'>Contact us</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-4 mb-16'>
                <div className='flex flex-col gap-4'>
                    <p className='font-monserrat text-sm'>If you have a quality question, maybe the <Link className='text-[#36c] cursor-pointer underline' href={"/about-us/faq"}>FAQ</Link> page can help.</p>

                    <p className='font-monserrat text-sm font-medium'>Didn't find the answer to your question? <span className='text-base font-monserrat font-normal'> Go to chat.</span></p>
                    <div className='w-full flex justify-center md:justify-start'>
                        <button className="flex items-center justify-center w-full sm:w-[80%] md:w-72 h-full text-base font-monserrat font-semibold text-[#5196A6] border border-solid border-4 rounded-xl">Support</button>
                    </div>
                    <div>
                        <h2 className='font-monserrat font-medium text-2xl'>You can contact us:</h2>
                        <div className='flex gap-2 text-base'>
                            <p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.57039 7.88709C5.28389 6.00009 6.61439 4.30509 8.64689 3.68409C9.00757 3.57381 9.39673 3.6052 9.73507 3.77187C10.0734 3.93853 10.3355 4.22792 10.4679 4.58109L11.1204 6.32109C11.2254 6.60101 11.2444 6.90593 11.1749 7.19672C11.1054 7.48751 10.9506 7.7509 10.7304 7.95309L8.78939 9.73059C8.69371 9.81839 8.62242 9.92948 8.58246 10.053C8.5425 10.1766 8.53524 10.3084 8.56139 10.4356L8.57939 10.5136L8.62589 10.7086C8.86728 11.6561 9.23508 12.5667 9.71939 13.4161C10.247 14.3186 10.9017 15.1406 11.6634 15.8566L11.7234 15.9106C11.8203 15.9966 11.9378 16.056 12.0645 16.0831C12.1912 16.1102 12.3228 16.104 12.4464 16.0651L14.9559 15.2746C15.2411 15.185 15.5465 15.1828 15.833 15.268C16.1195 15.3533 16.374 15.5222 16.5639 15.7531L17.7519 17.1946C18.2469 17.7946 18.1869 18.6766 17.6184 19.2061C16.0629 20.6566 13.9239 20.9536 12.4359 19.7581C10.6119 18.2868 9.07432 16.4924 7.89989 14.4646C6.71592 12.4383 5.92508 10.2067 5.56889 7.88709H5.57039ZM10.1349 10.5346L11.7429 9.05859C12.1836 8.65439 12.4935 8.12769 12.6328 7.5461C12.772 6.96451 12.7343 6.35457 12.5244 5.79459L11.8734 4.05459C11.6069 3.34396 11.0795 2.76168 10.3986 2.4264C9.71773 2.09111 8.93464 2.02806 8.20889 2.25009C5.68439 3.02259 3.65789 5.28609 4.08689 8.11359C4.38689 10.0876 5.07839 12.5986 6.60389 15.2206C7.87095 17.4071 9.52957 19.3419 11.4969 20.9281C13.7289 22.7206 16.7079 22.1086 18.6429 20.3056C19.1966 19.7901 19.5326 19.0827 19.5825 18.3278C19.6324 17.573 19.3924 16.8275 18.9114 16.2436L17.7234 14.8006C17.3433 14.3393 16.8342 14.0021 16.2612 13.8321C15.6882 13.6621 15.0775 13.6672 14.5074 13.8466L12.4239 14.5021C11.8859 13.9474 11.4147 13.3317 11.0199 12.6676C10.6385 11.9961 10.3412 11.2802 10.1349 10.5361V10.5346Z" fill="#242424" />
                                </svg>

                            </p>
                            <a className='font-monserrat text-base' href="tel:+380931111111">+38 093 111 11 11</a>
                        </div>
                        <div className='flex gap-2 text-base'>
                            <p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.57039 7.88709C5.28389 6.00009 6.61439 4.30509 8.64689 3.68409C9.00757 3.57381 9.39673 3.6052 9.73507 3.77187C10.0734 3.93853 10.3355 4.22792 10.4679 4.58109L11.1204 6.32109C11.2254 6.60101 11.2444 6.90593 11.1749 7.19672C11.1054 7.48751 10.9506 7.7509 10.7304 7.95309L8.78939 9.73059C8.69371 9.81839 8.62242 9.92948 8.58246 10.053C8.5425 10.1766 8.53524 10.3084 8.56139 10.4356L8.57939 10.5136L8.62589 10.7086C8.86728 11.6561 9.23508 12.5667 9.71939 13.4161C10.247 14.3186 10.9017 15.1406 11.6634 15.8566L11.7234 15.9106C11.8203 15.9966 11.9378 16.056 12.0645 16.0831C12.1912 16.1102 12.3228 16.104 12.4464 16.0651L14.9559 15.2746C15.2411 15.185 15.5465 15.1828 15.833 15.268C16.1195 15.3533 16.374 15.5222 16.5639 15.7531L17.7519 17.1946C18.2469 17.7946 18.1869 18.6766 17.6184 19.2061C16.0629 20.6566 13.9239 20.9536 12.4359 19.7581C10.6119 18.2868 9.07432 16.4924 7.89989 14.4646C6.71592 12.4383 5.92508 10.2067 5.56889 7.88709H5.57039ZM10.1349 10.5346L11.7429 9.05859C12.1836 8.65439 12.4935 8.12769 12.6328 7.5461C12.772 6.96451 12.7343 6.35457 12.5244 5.79459L11.8734 4.05459C11.6069 3.34396 11.0795 2.76168 10.3986 2.4264C9.71773 2.09111 8.93464 2.02806 8.20889 2.25009C5.68439 3.02259 3.65789 5.28609 4.08689 8.11359C4.38689 10.0876 5.07839 12.5986 6.60389 15.2206C7.87095 17.4071 9.52957 19.3419 11.4969 20.9281C13.7289 22.7206 16.7079 22.1086 18.6429 20.3056C19.1966 19.7901 19.5326 19.0827 19.5825 18.3278C19.6324 17.573 19.3924 16.8275 18.9114 16.2436L17.7234 14.8006C17.3433 14.3393 16.8342 14.0021 16.2612 13.8321C15.6882 13.6621 15.0775 13.6672 14.5074 13.8466L12.4239 14.5021C11.8859 13.9474 11.4147 13.3317 11.0199 12.6676C10.6385 11.9961 10.3412 11.2802 10.1349 10.5361V10.5346Z" fill="#242424" />
                                </svg>

                            </p>
                            <a className='font-monserrat text-base' href="tel:+380951111111">+38 095 111 11 11</a>
                        </div>
                        <div className='flex gap-2 text-base'>
                            <p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.25 4H18.75C19.5801 3.99995 20.3788 4.31755 20.9822 4.88767C21.5856 5.45779 21.948 6.23719 21.995 7.066L22 7.25V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V7.25C1.99995 6.41986 2.31755 5.62117 2.88767 5.01777C3.45779 4.41437 4.23719 4.052 5.066 4.005L5.25 4H18.75H5.25ZM20.5 9.373L12.35 13.663C12.258 13.7116 12.1568 13.7405 12.053 13.7479C11.9492 13.7553 11.845 13.7411 11.747 13.706L11.651 13.664L3.5 9.374V16.75C3.50002 17.1892 3.66517 17.6123 3.96268 17.9354C4.26019 18.2585 4.6683 18.4579 5.106 18.494L5.25 18.5H18.75C19.1893 18.5 19.6126 18.3347 19.9357 18.037C20.2588 17.7392 20.4581 17.3309 20.494 16.893L20.5 16.75V9.373ZM18.75 5.5H5.25C4.81081 5.50002 4.38768 5.66517 4.06461 5.96268C3.74154 6.26019 3.54214 6.6683 3.506 7.106L3.5 7.25V7.679L12 12.152L20.5 7.678V7.25C20.5 6.81065 20.3347 6.38739 20.037 6.06429C19.7392 5.74119 19.3309 5.5419 18.893 5.506L18.75 5.5Z" fill="#131313" />
                                </svg>
                            </p>
                            <a className='font-monserrat text-base' href="mailto:lucas.soldierty@gmail.com">Lucas.soldierty@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}