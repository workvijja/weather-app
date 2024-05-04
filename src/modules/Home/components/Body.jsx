import HourlyWeather from "@/modules/Home/components/HourlyWeather.jsx";
import {Button} from "@/components/ui/button.jsx";
import {ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";

const body = () => {
    const nav = useNavigate()

    const handleClick = () => nav("/forecast")

    return (
        <div className={"border shadow-sm rounded-lg p-4 w-full h-full grid grid-cols-1 grid-rows-8 gap-4"}>
            <div className={"col-span-1 row-span-1 flex items-center justify-between gap-4"}>
                <h1 className={"text-md font-bold"}>Today</h1>
                <Button variant={"link"} onClick={handleClick} className={"opacity-50 p-0"}>Forecast <ArrowRight className={"w-4 h-4 ml-1"} /></Button>
            </div>
            <div className={"col-span-1 row-span-7"}>
                <HourlyWeather/>
            </div>
        </div>
    )
}

export default body