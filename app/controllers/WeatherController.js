import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
    const weather = AppState.Weather;
    if (weather) {
        let htmlString = weather.WeatherTemplate; // Use the WeatherTemplate property of the weather object
        setHTML('weather', htmlString);
    }
}




export class WeatherController {
constructor() {
this.getWeather()

AppState.on('Weather', _drawWeather)
this.registerEventListeners
}

registerEventListeners() {
    document.getElementById('weather').addEventListener('click', (event) => {
        if (event.target.id === 'toggle-unit-btn') {
            AppState.Weather.toggleTemperatureUnit();
            _drawWeather();
        }
    });
}

async getWeather() {
    try {
        await weatherService.getWeather()
        // Pop.success('Got Weather')
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}
}