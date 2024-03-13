import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"


export default function Calendar({ setBirthday, birthday }) {
    const [t, i18n] = useTranslation("global")
    const [calendarModal, setCalendarModal] = useState(false)
    const [yearModal, setYearModal] = useState(false)
    const yearModalRef = useRef(null);
    const closeModal = (event) => {
        if (event.target.id === "modalCalendar") {
            setCalendarModal(false);
        }
    }
    const [currentMonth, setCurrentMonth] = useState();
    // const initialYear = birthday ? new Date(birthday).getFullYear() : new Date().getFullYear();
    // const initialMonthIndex = birthday ? new Date(birthday).getMonth() : new Date().getMonth();
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

    const year = new Date().getFullYear();
    const yearsArray = Array.from({ length: 100 }, (_, index) => (year - index));

    const handlePrevMonth = () => {
        setCurrentMonthIndex((prevMonthIndex) => {
            const newMonthIndex = (prevMonthIndex - 1 + 12) % 12;
            const newYearIndex = newMonthIndex === 11 ? currentYear - 1 : currentYear;
            setCurrentYear(newYearIndex);
            monthCalendar(newMonthIndex, newYearIndex);
            return newMonthIndex;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonthIndex((prevMonthIndex) => {
            const newMonthIndex = (prevMonthIndex + 1) % 12;
            const newYearIndex = newMonthIndex === 0 ? currentYear + 1 : currentYear;
            setCurrentYear(newYearIndex);
            monthCalendar(newMonthIndex, newYearIndex);
            return newMonthIndex;
        });
    };



    const monthCalendar = (newMonthIndex, newYearIndex) => {
        const month = newMonthIndex !== undefined ? newMonthIndex : currentMonthIndex;
        const year = newYearIndex !== undefined ? newYearIndex : currentYear;
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const daysOfMonth = new Date(year, month + 1, 0).getDate();
        const daysOfPrevMonth = new Date(year, month, 0).getDate();

        const daysOfCalendar = Array.from({ length: 42 }, (_, index) => {
            const day = index + 1 - firstDayOfWeek;
            if (day > 0 && day <= daysOfMonth) {
                return { day: day, month: month, year: year };
            } else if (day <= 0) {
                const prevMonth = month === 0 ? 11 : month - 1;
                const prevYear = month === 0 ? year - 1 : year;
                return { day: daysOfPrevMonth + day, month: prevMonth, year: prevYear };
            } else {
                const nextMonth = month === 11 ? 0 : month + 1;
                const nextYear = month === 11 ? year + 1 : year;
                return { day: day - daysOfMonth, month: nextMonth, year: nextYear };
            }
        });

        setCurrentMonth(daysOfCalendar);
    };

    const handleDayClick = (day) => {
        const selectedDate = new Date(currentYear, currentMonthIndex, day);
        const formattedDate = selectedDate.toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        setBirthday(formattedDate);
        setCalendarModal(false);
    };

    const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthsEs = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const daysEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const daysEs = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

    useEffect(() => {
        monthCalendar()
    }, [])

    useEffect(() => {
        if (yearModalRef.current && yearsArray.includes(currentYear)) {
            const selectedYearIndex = yearsArray.indexOf(currentYear);
            const modalHeight = yearModalRef.current.clientHeight;
            const buttonHeight = 16
            const scrollToY = (selectedYearIndex * buttonHeight) - (modalHeight / 2) + (buttonHeight / 2);
            yearModalRef.current.scrollTop = scrollToY;
        }
    }, [yearModalRef, currentYear, yearsArray]);

    return (
        <>
            <div onClick={() => setCalendarModal(true)}>
                <p className="relative text-sm h-8 font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1">{birthday ? birthday : null}
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="absolute w-4 top-[0.3rem] right-[0.5rem]"><g><path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg>
                </p>
            </div>
            {
                calendarModal &&
                <div onClick={closeModal} id="modalCalendar" className="fixed top-0 left-0 w-full h-full z-[3]">
                    <div className="absolute top-[14.5rem] md:top-[16rem] left-[14%] md:left-[0.5rem] flex flex-col bg-white border border-solid border-1 border-[#000000b3] w-[300px] rounded-3xl">
                        <div className="flex flex-row justify-center gap-7 h-8 items-center">
                            <span className="cursor-pointer" onClick={handlePrevMonth}>&lt;</span>
                            <p className="w-16" onChange={(event) => setCurrentMonthIndex(event.target.selectedIndex)} name="" id="">
                                {i18n.language === "en" ? monthsEn.map((month, index) => {
                                    if (index === currentMonthIndex) {
                                        return month;
                                    }
                                })
                                    :
                                    monthsEs.map((month, index) => {
                                        if (index === currentMonthIndex) {
                                            return month;
                                        }
                                    })
                                }
                            </p>
                            <div className="w-16 flex justify-around cursor-pointer transition-transform duration-300" onClick={() => setYearModal(!yearModal)}>
                                <p>{currentYear}</p>
                                {!yearModal ? <p className="flex text-xs items-center">&#9660;</p> : <p className="flex text-xs items-center">&#9650;</p>}
                            </div>
                            {yearModal &&
                                <div ref={yearModalRef} className="bg-white absolute w-[300px] h-[216px] top-[3.5rem] rounded-b-3xl flex gap-[10px] text-center flex-wrap overflow-y-auto border-l border-r border-solid border-1 border-[#000000b3]">
                                    {yearsArray?.map(year => {
                                        const isCurrentYear = year === currentYear;
                                        const bgColor = isCurrentYear ? 'bg-[#1976d2] hover:bg-[#1565c0] text-white' : 'hover:bg-[#0000000a]';
                                        return (
                                            <div key={year} className="w-[90px] h-[36px] flex justify-center">
                                                <button
                                                    onClick={() => {
                                                        setCurrentYear(parseInt(year))
                                                        let newYearIndex = parseInt(year)
                                                        monthCalendar(undefined, newYearIndex)
                                                        setYearModal(false)
                                                    }}
                                                    className={`${bgColor} font-monserrat text-xs w-[80%] h-[90%] flex items-center justify-center rounded-3xl cursor-pointer`} value={year}>{year}</button
                                                >
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            <span className="cursor-pointer" onClick={handleNextMonth}>&gt;</span>
                        </div>
                        <div className="flex justify-around pl-4 pr-4">
                            {i18n.language === "en" ? daysEn.map(day => {
                                return (
                                    <span className="font-monserrat text-xs w-[36px] text-center">{day}</span>
                                )
                            })
                                :
                                daysEs.map(day => {
                                    return (
                                        <span className="font-monserrat text-xs w-[36px] text-center">{day}</span>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-wrap justify-around text-center mt-2 pl-4 pr-4">
                            {currentMonth?.length && currentMonth.map(({ day, month, year }, index) => {
                                const isNotCurrentMonth = month !== currentMonthIndex;
                                const bgColor = isNotCurrentMonth ? 'text-[#4848484d]' : '';

                                const formattedDay = day < 10 ? `0${day}` : `${day}`;
                                const formattedMonth = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;
                                const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

                                const bgSelectedDay = formattedDate === birthday ? 'bg-[#1976d2] text-white' : '';
                                return <button className={`flex justify-center items-center rounded-full font-monserrat text-xs w-[36px] h-[36px] ${bgColor} ${bgSelectedDay}`}
                                    key={`${year}-${month}-${day}`}
                                    onClick={() => handleDayClick(day)}
                                >{day}</button>
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}