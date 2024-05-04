import {atom} from "jotai";
import weatherForecastAtom from "@/atoms/weatherForecastAtom.js";
import {chain} from "lodash"
import moment from "moment";

const groupedDateWeatherForecastAtom = atom((get) => {
    const {data, isPending, error} = get(weatherForecastAtom)

    if (!data?.list?.length) return {data: {}, isPending, error}

    const dataGroupByDate = chain(data.list)
        .map((d) => ({...d, date: moment(d.dt * 1000).format("YYYY-MM-DD")}))
        .groupBy("date")
        .value()

    return {data: dataGroupByDate, isPending, error}
})

export default groupedDateWeatherForecastAtom