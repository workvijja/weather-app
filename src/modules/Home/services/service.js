import axios from "axios"

const citiesUrl = "https://api.openweathermap.org/geo/1.0/direct"

export const getCities = async ({queryKey: [, q]}) => {
    const {data} = await axios.get(citiesUrl, {
        params: {q, limit:3, appid:import.meta.env.VITE_OPEN_WEATHER_API_KEY}
    })



    return data
}

