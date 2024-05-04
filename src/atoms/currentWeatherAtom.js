import {atomWithQuery} from "jotai-tanstack-query";
import selectedCityAtom from "@/atoms/selectedCityAtom.js";
import {getCurrentWeather} from "@/services/service.js";
import {weatherKeys} from "@/services/keys.js";

const currentWeatherAtom = atomWithQuery((get) => ({
    queryKey: [weatherKeys, get(selectedCityAtom)],
    queryFn: getCurrentWeather,
    initialData: {}
}))

export default currentWeatherAtom