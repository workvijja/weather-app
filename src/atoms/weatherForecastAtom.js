import {atomWithQuery} from "jotai-tanstack-query";
import {weatherKeys} from "@/services/keys.js";
import {getWeatherForecast} from "@/services/service.js";
import selectedCityAtom from "@/atoms/selectedCityAtom.js";

const weatherForecastAtom = atomWithQuery((get) => ({
    queryKey: [weatherKeys, "forecast", get(selectedCityAtom)],
    queryFn: getWeatherForecast,
    initialData: {}
}))

export default weatherForecastAtom