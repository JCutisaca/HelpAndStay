import Image from "next/image"
import userProfile from '@/assets/svg/userProfile.svg'
import message from '@/assets/svg/message.svg'
import settings from '@/assets/svg/settings.svg'
import logOut from '@/assets/svg/logOut.svg'


export default function UserDropDown() {
    return (
        <div className='absolute bg-white flex flex-col top-20 right-20 z-[5] gap-4 p-2 rounded-xl shadow-custom'>
                <button className="flex gap-2 items-center">
                    <Image className="w-5" src={userProfile}></Image>
                    <p className="font-monserrat text-base text-black font-semibold text-left">Profile</p>
                </button>
                <button className="flex gap-2 items-center">
                    <Image className="w-5" src={message}></Image>
                    <p className="font-monserrat text-base text-black font-semibold text-left">Messages</p>
                </button>
                <button className="flex gap-2 items-center">
                    <Image className="w-5" src={settings}></Image>
                    <p className="font-monserrat text-base text-black font-semibold text-left">Settings</p>
                </button>
                <button className="flex gap-2 items-center">
                    <Image className="w-5" src={logOut}></Image>
                    <p className="font-monserrat text-base text-black font-semibold text-left">Log Out</p>
                </button>
                <div className="absolute top-[-16px] right-10 w-0 h-0">
                    <div className="w-0 h-0 border-solid border-transparent border-[8px] border-b-white"></div>
                </div>
            </div>
    )
}