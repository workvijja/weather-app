import {useAtom} from "jotai";
import WeatherCard from "@/modules/Home/components/WeatherCard.jsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import moment from "moment";
import groupedDateWeatherForecastAtom from "@/atoms/groupedDateWeatherForecastAtom.js";
import {useMemo} from "react";

const hourlyWeather = () => {
    const [{data, isPending, error}] = useAtom(groupedDateWeatherForecastAtom)

    const todayForecast = useMemo(() => {
        const today = moment(new Date()).format("YYYY-MM-DD")
        return data?.[today] ?? []
    }, [data])

    return (
        <ScrollArea className={"w-full h-full"}>
            <div className={"w-full"}>
                {todayForecast.map((d, i) => (
                    <>
                        <WeatherCard
                            key={i}
                            temp={d?.main?.temp}
                            weatherId={d?.weather?.[0]?.icon}
                            weather={d?.weather?.[0]?.main}
                            weatherTime={moment(d?.dt * 1000).format("HH:mm")}
                        />
                        <Separator orientation={"horizontal"} />
                    </>
                ))}
            </div>
            <ScrollBar orientation={"vertical"} />
        </ScrollArea>
    )
}

export default hourlyWeather