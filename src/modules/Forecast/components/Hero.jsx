import Logo from "@/components/Logo.jsx";
import WeatherDetail from "@/components/WeatherDetail.jsx";
import Temp from "@/modules/Forecast/components/Temp.jsx";
import {useAtom} from "jotai";
import groupedDateWeatherForecastAtom from "@/atoms/groupedDateWeatherForecastAtom.js";
import moment from "moment";
import {useMemo} from "react";

const hero = () => {
    const [{data, isPending, error}] = useAtom(groupedDateWeatherForecastAtom)

    const tomorrowWeather = useMemo(() => {
        const tomorrow = moment(new Date()).add(1, "days").format("YYYY-MM-DD")
        return data?.[tomorrow]?.[0] ?? {}
    }, [data]) 
    
    const weatherIcon = tomorrowWeather?.weather?.[0]?.icon

    const temp = tomorrowWeather?.main?.temp
    const desc = tomorrowWeather?.weather?.[0]?.description

    const wind = tomorrowWeather?.wind?.speed
    const humidity = tomorrowWeather?.main?.humidity
    const rain = tomorrowWeather?.rain?.["1h"]

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