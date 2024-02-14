"use client"
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import telephone from '@/assets/images/telephone.webp'
import towerEiffel from '@/assets/images/towerEiffel.webp'
import foodStand from '@/assets/images/foodStand.webp'
import hotAirBalloon from '@/assets/images/hotAirBalloon.webp'
import mausoleum from '@/assets/images/mausoleum.webp'
import statuesBuddha from '@/assets/images/statuesBuddha.webp'
import lanterns from '@/assets/images/lanterns.webp'

export default function Home() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 grid-rows-12 md:grid-cols-7 md:grid-rows-9 gap-4 w-full h-full max-h-[90vh]">
        <div className="flex items-center gap-4 w-full h-full justify-between col-span-2 md:hidden">
          <button className="flex items-center justify-center w-[inherit] h-[50%] text-base font-monserrat font-semibold w-40 text-[#5196A6] border border-solid border-4 rounded-xl">Sign in</button>
          <button className="flex items-center justify-center w-[inherit] h-[50%] text-base font-monserrat font-semibold w-40 text-white text-nowrap bg-[#5196A6] rounded-xl">Sign up</button>
        </div>
        <div className="flex col-span-2 row-span-2 md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-5">
          <Image className="object-cover w-full" src={telephone}></Image>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 col-span-2 row-start-4 row-end-4 bg-white z-10 h-full md:col-start-1 md:col-end-4 md:row-start-4 md:row-end-6">
          <div className="w-full h-[50%] flex items-center justify-center">
            <p className="font-unbounded text-3xl md:text-4xl lg:text-7xl">Where next?</p>
          </div>
          <div className="w-full md:w-[80%] h-[50%] flex justify-end items-center">
            <button className="font-monserrat font-semibold md:h-[3rem] text-xl text-white bg-[#F3A342] w-full rounded-xl md:w-[50%]">Join Help&Stay</button>
          </div>
        </div>
        <div className="col-span-1 row-start-5 row-end-9 md:col-start-5 md:row-start-1 md:row-end-9">
          <Image className="object-cover h-[100%]" src={towerEiffel}></Image>
        </div>
        <div className="col-starts-2 row-start-5 row-end-7 md:row-start-5 md:col-start-3 md:row-end-8 md:col-end-5 relative">
          <Image className="object-cover h-full" src={hotAirBalloon}></Image>
        </div>
        <div className="col-start-2 row-start-7 row-end-9 md:row-start-6 md:col-start-1 md:row-end-9 md:col-end-3">
          <Image className="object-cover h-full" src={foodStand}></Image>
        </div>
        <div className="flex col-start-1 col-end-3 row-start-9 row-end-12 md:col-start-6 md:col-end-8 md:row-start-2 md:row-end-5">
          <Image className="object-cover w-full" src={mausoleum}></Image>
        </div>
        <div className="invisible md:visible md:col-start-6 md:col-end-7 md:row-start-5 md:row-end-7">
          <Image className="object-cover w-full" src={statuesBuddha}></Image>
        </div>
        <div className="invisible md:visible md:col-start-7 md:col-end-7 md:row-start-5 md:row-end-7">
          <Image className="object-cover w-full" src={lanterns}></Image>
        </div>
      </div>
    </div>
  );
}
