import Logo from "@/components/Logo.jsx";
import WeatherDetail from "@/components/WeatherDetail.jsx";
import Temp from "@/modules/Home/components/Temp.jsx";
import currentWeatherAtom from "@/modules/Home/atoms/currentWeatherAtom.js";
import {useAtom} from "jotai";

const hero = () => {
    const [{data, isLoading, error}] = useAtom(currentWeatherAtom)

    const weatherIcon = data?.weather?.[0]?.icon
    // const weatherIcon = Array.isArray(data?.weather) && data?.weather[0]?.icon

    const temp = data?.main?.temp
    const desc = data?.weather?.[0]?.description

    const wind = data?.wind?.speed
    const humidity = data?.main?.humidity
    const rain = data?.rain?.["1h"]

    console.log(wind, humidity, data, rain)

    return (
        <div>
            <Logo id={weatherIcon} />
            <Temp {...{temp, desc}} />
            <WeatherDetail {...{wind, humidity, rain}} />
        </div>
    )
}

export default hero