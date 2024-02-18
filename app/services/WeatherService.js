import { api } from "./AxiosService.js"

class WeatherService {

    async getWeather() {
        const response = await api.get('api/weather')

        console.log('got weather', response.data)

    }
}







export const weatherService = new WeatherService()