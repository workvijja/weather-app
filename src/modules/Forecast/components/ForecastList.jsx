import {useAtom} from "jotai";
import WeatherCard from "@/components/WeatherCard.jsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import moment from "moment";
import weatherForecastAtom from "@/atoms/weatherForecastAtom.js";

const forecastList = () => {
    const [{data, isPending, error}] = useAtom(weatherForecastAtom)

    return (
        <ScrollArea className={"w-full h-full"}>
            <div className={"w-full"}>
                {data?.list?.map((d) => (
                    <>
                        <WeatherCard
                            key={d?.dt}
                            temp={d?.main?.temp}
                            weatherId={d?.weather?.[0]?.icon}
                            weather={d?.weather?.[0]?.main}
                            weatherTime={moment(d?.dt * 1000).format("D MMM HH:mm")}
                        />
                        <Separator orientation={"horizontal"} />
                    </>
                ))}
            </div>
            <ScrollBar orientation={"vertical"} />
        </ScrollArea>
    )
}

export default forecastList