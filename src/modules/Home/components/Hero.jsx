import Logo from "@/components/Logo.jsx";
import WeatherDetail from "@/components/WeatherDetail.jsx";
import Temp from "@/modules/Home/components/Temp.jsx";
import currentWeatherAtom from "@/atoms/currentWeatherAtom.js";
import {useAtom} from "jotai";

const hero = () => {
    const [{data, isPending, error}] = useAtom(currentWeatherAtom)

    const weatherIcon = data?.weather?.[0]?.icon

    const temp = data?.main?.temp
    const desc = data?.weather?.[0]?.description

    const wind = data?.wind?.speed
    const humidity = data?.main?.humidity
    const rain = data?.rain?.["1h"]

    return (
        <div className={"w-full h-full flex flex-col justify-center items-center gap-4"}>
            <div className={"flex flex-row sm:flex-col gap-4 items-center justify-center w-full"}>
                <Logo id={weatherIcon} className={"w-16 h-16 sm:w-36 sm:h-36"} />
                <Temp {...{temp, desc}} />
            </div>
            <WeatherDetail {...{wind, humidity, rain}} />
        </div>
    )
}

export default hero