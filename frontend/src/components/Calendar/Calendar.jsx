import { useEffect, useRef, useState } from "react"


export default function Calendar({ setBirthday, birthday }) {
    const [calendarModal, setCalendarModal] = useState(false)
    const closeModal = (event) => {
        if (event.target.id === "modalCalendar") {
            setCalendarModal(false);
        }
    }

    const [currentMonth, setCurrentMonth] = useState();
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

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
        const month = newMonthIndex ? newMonthIndex : currentMonthIndex;
        const year = newYearIndex ? newYearIndex : currentYear;
        const firstDayOfMonth = new Date(year, month, 1);
        const firstDayOfWeek = firstDayOfMonth.getDay();
        const daysOfMonth = new Date(year, month + 1, 0).getDate();
        const daysOfPrevMonth = new Date(year, month, 0).getDate();

        const daysOfCalendar = Array.from({ length: 42 }, (_, index) => {
            const day = index + 1 - firstDayOfWeek;
            if (day > 0 && day <= daysOfMonth) {
                return { day: day, month: month };
            } else if (day <= 0) {
                return { day: daysOfPrevMonth + day, month: month - 1 };
            } else {
                return { day: day - daysOfMonth, month: month + 1 };
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
                            <input className="text-center w-[60px]" type="number"
                                value={currentYear}
                                onChange={(e) => {
                                    setCurrentYear(parseInt(e.target.value))
                                    let newYearIndex = parseInt(e.target.value)
                                    monthCalendar(undefined, newYearIndex)
                                }}
                            ></input>
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