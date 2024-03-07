import { useEffect, useRef, useState } from "react"


export default function Calendar({ setBirthday, birthday }) {
    const [calendarModal, setCalendarModal] = useState(false)
    const [yearModal, setYearModal] = useState(true)
    const closeModal = (event) => {
        if (event.target.id === "modalCalendar") {
            setCalendarModal(false);
        }
    }

    const [currentMonth, setCurrentMonth] = useState();
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

    const year = new Date().getFullYear();
    const yearsArray = Array.from({ length: 100 }, (_, index) => (year - index));

    const handlePrevMonth = () => {
        setCurrentMonthIndex(prev => {
            const newMonthIndex = (prev - 1 + 12) % 12;
            monthCalendar(newMonthIndex)
            return newMonthIndex;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonthIndex(prev => {
            const newMonthIndex = (prev + 1) % 12;
            monthCalendar(newMonthIndex)
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
                return { day: day, month: month };
            } else if (day <= 0) {
                const prevMonth = month === 0 ? 11 : month - 1;
                return { day: daysOfPrevMonth + day, month: prevMonth };
            } else {
                const nextMonth = month === 11 ? 0 : month + 1;
                return { day: day - daysOfMonth, month: nextMonth };
            }
        });

        setCurrentMonth(daysOfCalendar);
    };

    const handlePrevYear = () => {
        setCurrentYear(prev => prev - 1);
    };

    const handleNextYear = () => {
        setCurrentYear(prev => prev + 1);
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

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        monthCalendar()
    }, [])

    return (
        <>
            <div onClick={() => setCalendarModal(true)}>
                <p className="text-sm h-8 font-monserrat w-full text-black border-[#D9D9D9] border-solid border-[3px] rounded-xl p-1">{birthday ? birthday : null}</p>
            </div>
            {
                calendarModal &&
                <div onClick={closeModal} id="modalCalendar" className="fixed top-0 left-0 w-full h-full z-[3]">
                    <div className="absolute top-[10.5rem] md:top-[14rem] left-[14%] md:left-[0.5rem] flex flex-col bg-white border border-solid border-1 border-[#000000b3] w-[300px] rounded-3xl">
                        <div className="flex flex-row justify-center gap-7 h-8 items-center">
                            <span className="cursor-pointer" onClick={handlePrevMonth}>&lt;</span>
                            <p className="w-16" onChange={(e) => setCurrentMonthIndex(e.target.selectedIndex)} name="" id="">
                                {months?.length && months.map((month, index) => {
                                    if (index === currentMonthIndex) {
                                        return month;
                                    }
                                })}
                            </p>
                            <div className="w-16 flex justify-around cursor-pointer transition-transform duration-300" onClick={() => setYearModal(!yearModal)}>
                                <p>{currentYear}</p>
                                {!yearModal ? <p className="flex text-xs items-center">&#9660;</p> : <p className="flex text-xs items-center">&#9650;</p>}
                            </div>
                            {yearModal &&
                                <div className="bg-white absolute w-[300px] h-[216px] top-[3.5rem] rounded-b-3xl flex gap-[10px] text-center flex-wrap overflow-y-auto border-l border-r border-solid border-1 border-[#000000b3]">
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
                            <span className="font-monserrat text-xs w-[36px] text-center">Dom</span>
                            <span className="font-monserrat text-xs w-[36px] text-center">Lun</span>
                            <span className="font-monserrat text-xs w-[36px] text-center">Mar</span>
                            <span className="font-monserrat text-xs w-[36px] text-center">Mier</span>
                            <span className="font-monserrat text-xs w-[36px] text-center">Jue</span>
                            <span className="font-monserrat text-xs w-[36px] text-center">Vie</span>
                            <span className="font-monserrat text-xs w-[36px] text-center">Sab</span>
                        </div>
                        <div className="flex flex-wrap justify-around text-center mt-2 pl-4 pr-4">
                            {currentMonth?.length && currentMonth.map(({ day, month }, index) => {
                                const isNotCurrentMonth = month !== currentMonthIndex;
                                const bgColor = isNotCurrentMonth ? 'text-[#4848484d]' : '';
                                return <button className={`flex justify-center items-center rounded-full font-monserrat text-xs w-[36px] h-[36px] ${bgColor}`}
                                    key={index}
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