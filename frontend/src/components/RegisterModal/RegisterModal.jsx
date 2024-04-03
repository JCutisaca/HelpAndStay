import { useEffect, useRef, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import { getAllCountries } from '@/apiRequests/Register/getAllCountries';
import { useTranslation } from 'react-i18next';
import { getAllStatesByCountryId } from '@/apiRequests/Register/getAllStatesByCountryId';
import { validateConfirmEmail, validateConfirmPassword, validateEmail, validateFirstName, validateLastName, validatePassword, validatePhoneNumber, validateCity, validateCountry, validateAll } from '../Validation/registerValidation';
import { postUser } from '@/apiRequests/Register/postUser';

export default function RegisterModal() {

    const [countries, setCountries] = useState(null);
    const [states, setStates] = useState(null);
    const [codes, setCodes] = useState(null);

    const [birthday, setBirthday] = useState();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        city: "",
        password: "",
        codeNumber: "",
        phoneNumber: "",
        confirmPassword: "",
        email: "",
        confirmEmail: "",
        country: "",
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        city: "",
        password: "",
        codeNumber: "",
        phoneNumber: "",
        confirmPassword: "",
        email: "",
        confirmEmail: "",
        country: "",
    });

    const [views, setViews] = useState({
        password: false,
        confirmPassword: false
    });

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleBlurFirstName = (value) => {
        setErrors({ ...errors, firstName: validateFirstName(value) })
    };
    const handleBlurLastName = (value) => {
        setErrors({ ...errors, lastName: validateLastName(value) })
    };
    const handleBlurPassword = (value) => {
        setErrors({ ...errors, password: validatePassword(value) })
    };
    const handleBlurConfirmPassword = (value) => {
        setErrors({ ...errors, confirmPassword: validateConfirmPassword(value, form.password) })
    };
    const handleBlurEmail = (value) => {
        setErrors({ ...errors, email: validateEmail(value) })
    };
    const handleBlurConfirmEmail = (value) => {
        setErrors({ ...errors, confirmEmail: validateConfirmEmail(value, form.email) })
    };
    const handleBlurPhoneNumber = (value) => {
        setErrors({ ...errors, phoneNumber: validatePhoneNumber(form.codeNumber, value) })
    }
    const handleBlurCountry = (id) => {
        setErrors({ ...errors, country: validateCountry(id) })
    }
    const handleBlurCity = (value) => {
        setErrors({ ...errors, city: validateCity(value) })
    }

    const handleChangeInput = (event) => {
        const value = event.target.value.trim();
        setForm({
            ...form,
            [event.target.name]: value
        })
        switch (event.target.name) {
            case "firstName":
                return handleBlurFirstName(value)
            case "lastName":
                return handleBlurLastName(value)
            case "city":
                return handleBlurCity(value)
            case "password":
                return handleBlurPassword(value)
            case "confirmPassword":
                return handleBlurConfirmPassword(value)
            case "email":
                return handleBlurEmail(value)
            case "confirmEmail":
                return handleBlurConfirmEmail(value)
            default:
                break;
        }
    }

    const handleChangeCode = (event) => {
        const value = event.target.value;
        setForm({
            ...form,
            codeNumber: event.target.value
        })
        setErrors({ ...errors, phoneNumber: validatePhoneNumber(value, form.phoneNumber) })
    }

    const handleChangePhoneNumber = (event) => {
        const value = event.target.value;
        if (value.length <= 13) {
            setForm({
                ...form,
                phoneNumber: value
            });
            handleBlurPhoneNumber(value)
        }
    }

    const handleChangeCountry = (event) => {
        const id = event.target.value;
        setForm({
            ...form,
            country: id,
            city: ""
        })
        handleBlurCountry(id)
        if (!id) return;
        getAllStatesByCountryId(setStates, id)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = validateAll(form, birthday, setErrors, errors)
        setErrors(result)
        const hasErrors = Object.values(result).some(valor => valor !== "");

        if (hasErrors) {
            return
        } else {
            await postUser(form, birthday)
        }
    };

    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        getAllCountries(setCountries, setCodes);
        document.body.style.overflow = "hidden"
        return (() => {
            document.body.style.overflow = ""
        })
    }, [])

    return (
        <form onSubmit={handleSubmit} className="relative mb-[10rem] md:mb-0 md:absolute w-[90%] md:w-fit flex flex-col justify-around rounded-3xl border border-black shadow-2xl min-h-[30rem] top-[5rem] z-[5] left-[50%] transform -translate-x-1/2 rounded-3xl bg-white items-center">
            <p className="text-xl font-unbounded font-semibold text-left text-black w-[90%] mt-4 md:mt-0">Sign up</p>
            <div className="w-[90%] md:w-[40rem] flex flex-col md:flex-row rounded-3xl bg-white">
                <div className="w-full h-full md:w-[50%] flex flex-col items-center justify-evenly">
                    <div className="w-[80%] flex flex-col items-left gap-[20px]">
                        <div className='relative'>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Full Name">First Name</label>
                            <input value={form.firstName} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="firstName" />
                            {errors?.firstName && <p className='text-xs absolute text-[#FF0000]'>{errors.firstName}</p>}
                        </div>
                        <div>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Full Name">Last Name</label>
                            <input value={form.lastName} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="lastName" />
                            {errors?.lastName && <p className='text-xs absolute text-[#FF0000]'>{errors.lastName}</p>}
                        </div>
                        <div className='relative'>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Birthday">Birthday</label>
                            <Calendar errors={errors} setErrors={setErrors} birthday={birthday} setBirthday={setBirthday} />
                            {errors?.birthday && <p className='text-xs absolute text-[#FF0000]'>{errors.birthday}</p>}
                        </div>
                        <div className='hidden md:block'>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Country">Country</label>
                            <select value={form.country} onChange={handleChangeCountry} className="text-sm font-monserrat w-full text-[#626262] border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" name="country">
                                <option value="">-Select an option-</option>
                                {countries?.map(country => {
                                    return (
                                        <option className='fon-monserrat' key={country.id} value={country.id}>
                                            {i18n.language === "en" ? country.nameEn : nameEs}
                                        </option>
                                    )
                                })}
                            </select>
                            {errors?.country && <p className='text-xs absolute text-[#FF0000]'>{errors.country}</p>}
                        </div>
                        <div className='hidden md:block'>
                            <label className="font-monserrat text-[#626262] text-sm" htmlFor="Password">Password</label>
                            <div className='relative'>
                                <input value={form.password} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type={views.password ? "text" : "password"} name="password"></input>
                                {errors?.password && <p className='text-xs absolute text-[#FF0000]'>{errors.password}</p>}
                                <span onClick={() => setViews({ ...views, password: !views.password })} className='absolute top-[0.5rem] right-[0.5rem] cursor-pointer'>
                                    {!views.password ?
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4"><g><path d="M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z"></path></g></svg>
                                        :
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4"><g><path d="M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path></g></svg>
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] mb-[20px] md:mt-0 md:mb-0 flex flex-col w-full md:w-[50%]">
                    <div className="flex justify-center w-full">
                        <div className="w-[80%] flex flex-col items-left  gap-[20px]">
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Email address">Email address</label>
                                <input value={form.email} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="email" />
                                {errors?.email && <p className='text-xs absolute text-[#FF0000]'>{errors.email}</p>}
                            </div>
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Email address">Confirm Email</label>
                                <input value={form.confirmEmail} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type="text" name="confirmEmail" />
                                {errors?.confirmEmail && <p className='text-xs absolute text-[#FF0000]'>{errors.confirmEmail}</p>}
                            </div>
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Phone number">Phone number</label>
                                <div className="flex flex-row justify-between">
                                    <select onChange={handleChangeCode} value={form.codeNumber} className="text-sm font-monserrat text-[#626262] border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1 w-[32%]" name="">
                                        <option value="">--</option>
                                        {codes?.map(code => {
                                            return (
                                                <option key={code} value={code}>
                                                    {code}
                                                </option>
                                            )
                                        })}
                                    </select>
                                    <input value={form.phoneNumber} onChange={handleChangePhoneNumber} className="appearance-none text-sm font-monserrat w-[65%] text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" name='phone' type="number" />
                                </div>
                                {(errors?.codeNumber || errors?.phoneNumber) && <p className='text-xs absolute text-[#FF0000]'>{errors?.codeNumber || errors?.phoneNumber}</p>}
                            </div>
                            <div className='md:hidden'>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Country">Country</label>
                                <select value={form.country} onChange={handleChangeCountry} className="text-sm font-monserrat w-full text-[#626262] border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" name="country">
                                    <option value="">-Select an option-</option>
                                    {countries?.map(country => {
                                        return (
                                            <option className='fon-monserrat' key={country.id} value={country.id}>
                                                {i18n.language === "en" ? country.nameEn : nameEs}
                                            </option>
                                        )
                                    })}
                                </select>
                                {errors?.country && <p className='text-xs absolute text-[#FF0000]'>{errors.country}</p>}
                            </div>
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="City">City</label>
                                <select value={form.city} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-[#626262] border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" name="city">
                                    <option value="">-Select an option-</option>
                                    {states?.map(state => {
                                        return (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        )
                                    })}
                                </select>
                                {errors?.city && <p className='text-xs absolute text-[#FF0000]'>{errors.city}</p>}
                            </div>
                            <div className='md:hidden'>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Password">Password</label>
                                <div className='relative'>
                                    <input value={form.password} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type={views.password ? "text" : "password"} name="password"></input>
                                    {errors?.password && <p className='text-xs absolute text-[#FF0000]'>{errors.password}</p>}
                                    <span onClick={() => setViews({ ...views, password: !views.password })} className='absolute top-[0.5rem] right-[0.5rem] cursor-pointer'>
                                        {!views.password ?
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4"><g><path d="M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z"></path></g></svg>
                                            :
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4"><g><path d="M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path></g></svg>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="font-monserrat text-[#626262] text-sm" htmlFor="Confirm password">Confirm password</label>
                                <div className='relative'>
                                    <input value={form.confirmPassword} onChange={handleChangeInput} className="text-sm font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1" type={views.confirmPassword ? "text" : "password"} name="confirmPassword"></input>
                                    {errors?.confirmPassword && <p className='text-xs absolute text-[#FF0000]'>{errors.confirmPassword}</p>}
                                    <span onClick={() => setViews({ ...views, confirmPassword: !views.confirmPassword })} className='absolute top-[0.5rem] right-[0.5rem] cursor-pointer'>
                                        {!views.confirmPassword ?
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4"><g><path d="M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z"></path></g></svg>
                                            :
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4"><g><path d="M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path></g></svg>
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="text-sm font-monserrat font-semibold w-[90%] text-white text-nowrap bg-[#5196A6] rounded-xl hover:bg-[#F3A342] hover:text-white hover:border-none transition-all duration-500 m-4 p-2" type='submit'>Sign up</button>
        </form>
    )
}