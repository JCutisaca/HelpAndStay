import { useTranslation } from "react-i18next"


export default function Statistics() {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <div className="w-full flex flex-col items-center mt-32">
                <h5 className="font-unbounded font-semibold md:text-5xl">{t("home.statistics.title")}</h5>
                <div className="w-full flex flex-col md:flex-col lg:flex-row justify-around mt-16">
                    <div className="flex w-full flex-col md:flex-row justify-around gap-6">
                        <div className="flex flex-col items-center gap-4 md:border-b-0 border-solid border-b-2 border-[#5196A6]">
                            <p className="font-unbounded text-5xl text-[#5196A6]">150 435</p>
                            <p className="font-monserrat font-semibold text-lg">{t("home.statistics.users")}</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 md:border-b-0 border-solid border-b-2 border-[#5196A6]">
                            <p className="font-unbounded text-5xl text-[#72A689]">186</p>
                            <p className="font-monserrat font-semibold text-lg">{t("home.statistics.countries")}</p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col md:flex-row justify-around mt-6 lg:mt-0 gap-6">
                        <div className="flex flex-col items-center gap-4 md:border-b-0 border-solid border-b-2 border-[#5196A6]">
                            <p className="font-unbounded text-5xl text-[#F2A341]">45 384</p>
                            <p className="font-monserrat font-semibold text-lg">{t("home.statistics.homes")}</p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <p className="font-unbounded text-5xl text-[#BF9E80]">43 586</p>
                            <p className="font-monserrat font-semibold text-lg">{t("home.statistics.reviews")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}