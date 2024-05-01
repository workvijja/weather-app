import {Separator} from "@/components/ui/separator.jsx"
import {CloudRainWind, Droplets, Wind} from "lucide-react";

const weatherDetail = ({wind, humidity, rain}) => {
    return (
        <div className={"w-full h-32 flex items-center justify-around p-4 rounded-lg border shadow-lg"}>
            <div className={"flex flex-col items-center"}>
                <Wind className={"w-8 h-8"} />
                <h1 className={"text-xl"}>Wind</h1>
                <p>{wind ?? 0} m/s</p>
            </div>
            <Separator orientation={"vertical"} />
            <div className={"flex flex-col items-center"}>
                <Droplets className={"w-8 h-8"} />
                <h1 className={"text-xl"}>Humidity</h1>
                <p>{humidity ?? 0} %</p>
            </div>
            <Separator orientation={"vertical"} />
            <div className={"flex flex-col items-center"}>
                <CloudRainWind className={"w-8 h-8"} />
                <h1 className={"text-xl"}>Rain</h1>
                <p>{rain ?? 0} mm</p>
            </div>
        </div>
    )
}

export default weatherDetail