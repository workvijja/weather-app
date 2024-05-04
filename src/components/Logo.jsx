import {AspectRatio} from "@/components/ui/aspect-ratio.jsx";
import {cn} from "@/lib/utils.js";
import {
    Cloud, CloudLightning,
    CloudMoon,
    CloudMoonRain,
    CloudRainWind,
    CloudSun,
    CloudSunRain,
    Cloudy, ImageOff,
    MoonStar, Snowflake,
    Sun, Tornado
} from "lucide-react";

const LogoMap = {
    "01d": Sun,
    "01n": MoonStar,
    "02d": CloudSun,
    "02n": CloudMoon,
    "03d": Cloud,
    "03n": Cloud,
    "04d": Cloudy,
    "04n": Cloudy,
    "09d": CloudRainWind,
    "09n": CloudRainWind,
    "10d": CloudSunRain,
    "10n": CloudMoonRain,
    "11d": CloudLightning,
    "11n": CloudLightning,
    "13d": Snowflake,
    "13n": Snowflake,
    "50d": Tornado,
    "50n": Tornado
}

const logo = ({id, className}) => {
    const Icon = LogoMap[id] ?? ImageOff
    return <Icon className={cn("w-8 h-8", className)} />
}

export default logo