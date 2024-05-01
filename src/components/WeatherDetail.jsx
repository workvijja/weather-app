import {Separator} from "@/components/ui/separator.jsx"
import {CloudRainWind, Droplets, Wind} from "lucide-react";

const weatherDetail = ({wind, humidity, rain}) => {
    return (
        <div className={"w-full h-32 flex items-center justify-around p-3 rounded-lg border shadow-lg"}>
            <div className={"flex flex-col items-center"}>
                <Wind className={"w-8 h-8 mb-1"} />
                <p className={"text-md text-wrap font-bold"}>{wind ?? 0} m/s</p>
                <h1 className={"text-sm opacity-50"}>Wind</h1>
            </div>
            <Separator orientation={"vertical"} />
            <div className={"flex flex-col items-center"}>
                <Droplets className={"w-8 h-8 mb-1"} />
                <p className={"text-md text-wrap font-bold"}>{humidity ?? 0} %</p>
                <h1 className={"text-sm opacity-50"}>Humidity</h1>
            </div>
            <Separator orientation={"vertical"} />
            <div className={"flex flex-col items-center"}>
                <CloudRainWind className={"w-8 h-8 mb-1"} />
                <p className={"text-md text-wrap font-bold"}>{rain ?? 0} mm</p>
                <h1 className={"text-sm opacity-50"}>Rain</h1>
            </div>
        </div>
    )
}

export default weatherDetail