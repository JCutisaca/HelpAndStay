import Image from "next/image";
import iconWhite from '@/assets/images/iconWhite.png'
import Link from "next/link";
import gitHubIcon from '@/assets/svg/gitHubIcon.svg'
import email from '@/assets/svg/email.svg'

export default function Footer() {
    return (
        <footer className="bg-[#72A689] grid grid-rows-12 grid-cols-12 h-[30rem] md:gap-4 md:grid-cols-16 md:grid-rows-6 md:h-[15rem]">
            <div className="col-end-6 md:col-end-4 col-span-2 col-start-2 row-start-2 md:col-end-4 row-end-4">
                <Image className="object-contain w-full" alt="" src={iconWhite}></Image>
            </div>
            <div className="gap-3 justify-center w-fit flex flex-col items-start col-start-2 row-start-4 row-end-7 md:col-start-5 md:row-start-2 md:row-span-4 md:grid md:items-center md:gap-4 text-nowrap">
                <Link className="font-monserrat text-white w-fit" href={"/about-us/project"}>About us</Link>
                <Link className="font-monserrat text-white w-fit" href={"/"}>Find host</Link>
                <Link className="font-monserrat text-white w-fit" href={"/"}>Host</Link>
                <Link className="font-monserrat text-white w-fit" href={"/"}>Profile</Link>
            </div>
            <div className="gap-3 text-wrap justify-center w-full flex flex-col items-start col-start-8 col-end-12 row-start-4 row-end-7 md:col-start-7 xl:col-start-9 md:row-start-2 md:row-span-4 md:w-fit md:grid md:items-center md:gap-4 text-nowrap">
                <Link className="row-span-1 font-monserrat text-white w-fit" href={"/about-us/faq"}>FAQ</Link>
                <Link className="row-span-1 font-monserrat text-white w-fit" href={"/about-us/verification"}>Verification</Link>
                <Link className="row-span-1 font-monserrat text-white w-fit" href={"/about-us/safety"}>Safety</Link>
                <Link className="row-span-1 font-monserrat text-white w-fit" href={"/"}>Settings</Link>
            </div>
            <div className="gap-3 justify-center w-fit flex flex-col items-start col-start-2 row-start-8 row-end-12 md:col-start-9 xl:col-start-12 md:row-start-2 md:row-span-4 md:grid md:items-center md:gap-4 md:text-nowrap">
                <Link className="row-span-1 font-monserrat text-white w-fit" href={"/about-us/contacts"}>Contacts:</Link>
                <Link className="row-span-1 font-monserrat text-white w-fit" href={"/"}>Support</Link>
                <Link className="row-span-1 font-monserrat text-white w-fit" href={"/"}>+54 11 22334455</Link>
                <Link className="whitespace-normal break-words row-span-1 font-monserrat text-white w-full" href={"/"}>Lucas.soldierty@gmail.com</Link>
            </div>
            <div className="gap-3 justify-center w-fit flex flex-row items-start col-start-8 row-start-9 col-end-12 md:col-start-[14] md:col-end-[14] xl:col-start-[15] xl:col-end-[16] md:row-start-2 md:row-span-3 md:grid md:items-center md:gap-4 text-nowrap">
                <Link target="blank" className="row-span-1 font-monserrat text-white h-8 w-fit" href={"https://www.linkedin.com/in/jhonathan-cutisaca/"}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-fit h-8 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                </Link>
                <Link target="blank" className="row-span-1 font-monserrat text-white h-8 w-fit" href={"https://github.com/JCutisaca/"}>
                    <Image className="w-fit h-8" alt="" src={gitHubIcon}></Image>
                </Link>
                <Link target="blank" className="row-span-1 font-monserrat text-white h-8 w-fit" href={"mailto:lucas.soldierty@gmail.com"}>
                    <Image className="w-fit h-8" alt="" src={email}></Image>
                </Link>
            </div>
        </footer>
    )
}