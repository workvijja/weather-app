import {atomWithQuery} from "jotai-tanstack-query";
import {citiesKeys} from "@/modules/Home/services/keys.js";
import {getCities} from "@/modules/Home/services/service.js";
import searchCityAtom from "@/modules/Home/atoms/searchCityAtom.js";

const citiesAtom = atomWithQuery((get) => ({
    queryKey: [citiesKeys, get(searchCityAtom)],
    queryFn: getCities,
    initialData: []
}))

export default citiesAtom