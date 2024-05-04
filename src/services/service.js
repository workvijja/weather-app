import axios from "axios"

const citiesUrl = "https://api.openweathermap.org/geo/1.0/direct"

export const getCities = async ({queryKey: [, q]}) => {
    const {data} = await axios.get(citiesUrl, {
        params: {q, limit:3, appid:import.meta.env.VITE_OPEN_WEATHER_API_KEY}
    })

    return data
}

const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather"

export const getCurrentWeather = async ({queryKey: [, {lat, lon}]}) => {
    const {data} = await axios.get(currentWeatherUrl, {
        params: {lat, lon, units: "metric", appid:import.meta.env.VITE_OPEN_WEATHER_API_KEY}
    })

    return data
}

const weatherForecastUrl = "https://api.openweathermap.org/data/2.5/forecast"

export const getWeatherForecast = async ({queryKey: [,, {lat, lon}]}) => {
    const {data} = await axios.get(weatherForecastUrl, {
        params: {lat, lon, units: "metric", appid:import.meta.env.VITE_OPEN_WEATHER_API_KEY}
    })

    return data
}