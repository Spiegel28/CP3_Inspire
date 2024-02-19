import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {

    async getWeather() {
        const response = await api.get('api/weather')

        console.log('got weather', response.data)

        const newWeather = new Weather(response.data)

        console.log('new weather', newWeather)

        AppState.Weather = newWeather
    }

}







export const weatherService = new WeatherService()