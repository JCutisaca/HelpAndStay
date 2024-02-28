import Image from 'next/image';
import api from './api.json'
import { useEffect, useRef, useState } from 'react';


export default function RegisterModal() {


    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <form className="absolute flex flex-col justify-around rounded-3xl border border-black shadow-2xl h-[30rem] top-[5rem] z-[5] left-[50%] transform -translate-x-1/2 rounded-3xl bg-white items-center">
            <p className="text-xl font-unbounded font-semibold text-left text-black w-[90%]">Sign up</p>
            <div className="w-[90%] md:w-[40rem] flex flex-row rounded-3xl bg-white">
                <div className="w-full h-full md:w-[50%] flex flex-col items-center justify-evenly">
                    <div className="w-[80%] flex flex-col items-left gap-2">
                        <div>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Full Name">Full Name</label>
                            <input className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="" id="" />
                        </div>
                        <div>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Birthday">Birthday</label>
                            <input className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="" id="" />
                        </div>
                        <div>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="City">City</label>
                            <select className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" name="" id="">
                                <option name="dificultad" value="0">-Select an option-</option>
                                <option name="dificultad" value="1">Very Easy</option>
                                <option name="dificultad" value="2">Easy</option>
                                <option name="dificultad" value="3">Moderate</option>
                                <option name="dificultad" value="4">Difficult</option>
                                <option name="dificultad" value="5">Very Difficult</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Password">Password</label>
                            <input className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="" id=""></input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[50%]">
                    <div className="flex justify-center w-full">
                        <div className="w-[80%] flex flex-col items-left gap-2">
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Email address">Email address</label>
                                <input className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="" id="" />
                            </div>
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Phone number">Phone number</label>
                                <div className="flex flex-row justify-between">
                                    <select className="text-sm font-monserrat text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1 w-[32%]" name="" id="">
                                        <option name="dificultad" value="0">--</option>
                                        {api?.map(country => {
                                            return (
                                                <option value={country.code}>
                                                    {country.code}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <input className="text-sm font-monserrat w-[65%] text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" />
                                </div>
                            </div>
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Country">Country</label>
                                <select className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" name="" id="">
                                    <option name="dificultad" value="0">-Select an option-</option>
                                </select>
                            </div>
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Confirm password">Confirm password</label>
                                <input className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="" id=""></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="text-sm font-monserrat font-semibold w-[90%] text-white text-nowrap bg-[#5196A6] rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-none transition-all duration-500 m-4 p-2">Sign up</button>
        </form>
    )
}