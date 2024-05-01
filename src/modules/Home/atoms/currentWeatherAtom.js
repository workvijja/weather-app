import {atomWithQuery} from "jotai-tanstack-query";
import selectedCityAtom from "@/modules/Home/atoms/selectedCityAtom.js";
import {getCurrentWeather} from "@/modules/Home/services/service.js";

const currentWeatherAtom = atomWithQuery((get) => ({
    queryKey: ["weather", get(selectedCityAtom)],
    queryFn: getCurrentWeather,
    initialData: {}
}))

export default currentWeatherAtom