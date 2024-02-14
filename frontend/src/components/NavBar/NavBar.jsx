import Link from "next/link";
import IconHelpAndStay from "../utils/IconHelpAndStay";
import Image from "next/image";
import menuBurger from '@/assets/svg/menuBurger.svg'
import telephone from '@/assets/images/telephone.webp'
import towerEiffel from '@/assets/images/towerEiffel.webp'
import foodStand from '@/assets/images/foodStand.webp'
import hotAirBalloon from '@/assets/images/hotAirBalloon.webp'
import hotAirBalloon2 from '@/assets/images/hotAirBalloon2.webp'
import mausoleum from '@/assets/images/mausoleum.webp'
import statuesBuddha from '@/assets/images/statuesBuddha.webp'
import lanterns from '@/assets/images/lanterns.webp'



export default function NavBar() {
    return (
        <nav className="flex items-center md:justify-around h-20 bg-white">
            <div className="flex items-center md:justify-around w-[70%] h-[100%">
                <IconHelpAndStay></IconHelpAndStay>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>About us</Link>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>Host</Link>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>Find Host</Link>
                <Link className="hidden md:inline-block text-lg font-monserrat font-semibold" href={"/"}>FAQ</Link>
            </div>
            <div className="hidden md:flex gap-4 w-[30%]">
                <button className="text-xl font-monserrat font-semibold w-40 text-[#5196A6] border border-solid border-4 rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-[#F3A342] transition-all duration-500">Sign in</button>
                <button className="text-xl font-monserrat font-semibold w-40 text-white text-nowrap bg-[#5196A6] rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-none transition-all duration-500">Sign up</button> 
            </div>
            <div className="md:hidden flex w-[30%] justify-end">
                <Image className="w-9 h-9" src={menuBurger}/>
            </div>
        </nav>
    )
}