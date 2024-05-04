import {atomWithQuery} from "jotai-tanstack-query";
import {citiesKeys} from "@/services/keys.js";
import {getCities} from "@/services/service.js";
import searchCityAtom from "@/atoms/searchCityAtom.js";

const citiesAtom = atomWithQuery((get) => ({
    queryKey: [citiesKeys, get(searchCityAtom)],
    queryFn: getCities,
    initialData: []
}))

export default citiesAtom