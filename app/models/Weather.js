export class Weather {
    constructor(data){
        if (data && data.name) {
        this.city = data.name;
        this.temperature = data.main.temp;
        this.feelsLike = data.main.feels_like;
        this.description = data.weather[0].description;
        this.iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        this.windSpeed = data.wind.speed;
        this.temperatureFahrenheit = data.temperatureFahrenheit
        this.temperatureCelsius = data.temperatureCelsius
        } else {console.error('Weather data is undefined or missing properties.');}
    }

    convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    toggleTemperatureUnit() {
        if (this.isCelsius) {
            this.temperature = this.temperatureFahrenheit;
        } else {
            this.temperature = this.temperatureCelsius;
        }
        this.isCelsius = !this.isCelsius;
    }
    
    get WeatherTemplate() {
        return `
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="weather-card text-center">
                <h2>${this.city}</h2>
                <p>Temperature: <span>${this.temperature}</span> &deg;C</p>
                <button id="toggle-unit-btn">Toggle Temperature Unit</button>
            </div>
        </div>
    </div>
</div>
        `
    }
    

}





