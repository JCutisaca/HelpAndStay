import Link from "next/link";
import { useTranslation } from "react-i18next";


export default function AboutDropDown({ id, closeHandler }) {
    const [t, i18n] = useTranslation("global");
    return (
        <div id={id} className='absolute bg-white flex flex-col top-14 w-40 right-0 z-[5] rounded-xl shadow-custom'>
            <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat md:hover:bg-[#f0f4f9] font-semibold text-nowrap md:rounded-t-xl" href={"/about-us/project"}>{t("navbar.aboutUs.aboutProject")}</Link>
            <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat md:hover:bg-[#f0f4f9] font-semibold text-nowrap" href={"/about-us/safety"}>{t("navbar.aboutUs.safety")}</Link>
            <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat md:hover:bg-[#f0f4f9] font-semibold text-nowrap" href={"/about-us/verification"}>{t("navbar.aboutUs.verification")}</Link>
            <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat md:hover:bg-[#f0f4f9] font-semibold text-nowrap" href={"/about-us/contacts"}>{t("navbar.aboutUs.contacts")}</Link>
            {/* <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat md:hover:bg-[#f0f4f9] font-semibold" href={"/"}>Host</Link>
                    <Link onClick={closeHandler} id={id} className="flex p-2 pl-6 gap-2 items-center text-base font-monserrat md:hover:bg-[#f0f4f9] font-semibold" href={"/"}>Find Host</Link> */}
            <Link onClick={closeHandler} id={id} className="lg:hidden flex p-2 pl-6 gap-2 items-center text-base font-monserrat md:hover:bg-[#f0f4f9] font-semibold md:rounded-b-xl" href={"/about-us/faq"}>{t("navbar.aboutUs.faq")}</Link>
            <div className="absolute top-[-16px] right-7 w-0 h-0">
                <div className="w-0 h-0 border-solid border-transparent border-[8px] border-b-white"></div>
            </div>
        </div>
    )
}