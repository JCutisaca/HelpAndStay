import MailIcon from "../utils/MailIcon";
import LockIcon from "../utils/LockIcon";
import Image from "next/image";
import login from '@/assets/images/login.jpg'
import { signIn, useSession } from 'next-auth/react'


export default function LoginModal() {

    const handleSignInGoogle = async () => await signIn("google", { redirect: false });
    const handleSignInFacebook = async () => await signIn("facebook", { redirect: false });
    const {data} = useSession()
    console.log(data);
    

    return (
        <div className="absolute flex flex-col md:flex-row rounded-3xl border border-black shadow-2xl w-[90%] md:w-[40rem] h-[40rem] top-[5rem] z-[5] left-[50%] transform -translate-x-1/2">
            <div className="w-full h-full md:w-[50%] flex flex-col items-center justify-evenly bg-white rounded-3xl md:rounded-e-[0] md:rounded-s-3xl">
                <p className="text-xl font-monserrat font-semibold text-center text-black w-[80%]">Sign in with the following services:</p>
                <div className="w-[80%] flex flex-col items-center gap-4">
                    <button onClick={() => handleSignInGoogle()} className="flex items-center justify-center md:justify-start gap-4 text-nowrap text-lg font-monserrat font-semibold w-full text-black border-[#242424] border-solid border-2 rounded-xl p-1 pl-4">
                        <svg
                            aria-hidden="true"
                            width="18" height="18"
                            viewBox="0 0 18 18">
                            <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path>
                            <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path>
                            <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path>
                            <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path>
                        </svg>
                        <span>
                            Login with Google
                        </span>
                    </button>
                    <button onClick={() => handleSignInFacebook()} className="flex items-center justify-center md:justify-start gap-4 text-nowrap text-lg font-monserrat font-semibold w-full text-white rounded-xl bg-[#1877F2] p-1 pl-4">
                        <svg
                            aria-hidden="true"
                            width="18" height="18"
                            viewBox="0 0 18 18">
                            <path fill="currentColor" d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"></path>
                        </svg>
                        <span>
                            Login with Facebook
                        </span>
                    </button>
                    {/* <button className="flex items-center justify-evenly text-nowrap text-lg font-monserrat font-semibold w-full text-white border border-solid border-[3px] rounded-xl bg-black p-1">
                        <svg fill="#FFFFFF"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24">
                            <path d="M19.957 8.819c-.121.09-2.26 1.244-2.26 3.81 0 2.968 2.722 4.019 2.803 4.045-.013.064-.432 1.438-1.435 2.838-.893 1.232-1.827 2.462-3.247 2.462s-1.785-.79-3.424-.79c-1.598 0-2.166.816-3.465.816s-2.205-1.14-3.247-2.54C4.475 17.816 3.5 15.26 3.5 12.837c0-3.888 2.64-5.95 5.237-5.95 1.38 0 2.531.868 3.398.868.825 0 2.11-.92 3.681-.92.595 0 2.734.051 4.141 1.984zm-4.886-3.63c.65-.739 1.109-1.763 1.109-2.787 0-.142-.013-.286-.04-.402-1.057.038-2.314.674-3.072 1.516-.595.648-1.15 1.672-1.15 2.71 0 .156.027.312.04.362.066.012.175.026.283.026.948 0 2.14-.608 2.83-1.426z" fill=""></path>
                        </svg>
                        Login with Apple
                        </button> */}
                </div>
                <p className="text-xl font-monserrat text-center text-black w-[80%]">Or</p>
                <form className="w-[80%] flex flex-col items-center gap-4">
                    <input className="text-lg font-monserrat w-full text-[#5196A6] border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" placeholder="Email" type="text" />
                    <input className="text-lg font-monserrat w-full text-[#5196A6] border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" placeholder="Password" type="text" />
                    <button className="text-lg font-monserrat font-semibold w-full text-[#5196A6] border border-solid border-[3px] rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-[#F3A342] transition-all duration-500" type="submit">Login</button>
                </form>
                <p className="text-sm font-monserrat text-black w-[90%]">By continuing, you accept our terms of service. Please read our privacy policy.</p>
            </div>
            <div className="hidden md:flex w-[50%] rounded-r-3xl">
                <Image className="w-full h-full object-cover rounded-r-3xl" priority alt="" src={login} />
            </div>
        </div>
    )
}