export class Weather {
    constructor(data){
        if (data && data.name) {
        this.city = data.name;
        this.temperature = data.main.temp;
        this.feelsLike = data.main.feels_like;
        this.description = data.weather[0].description;
        this.iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        this.windSpeed = data.wind.speed;
        } else {console.error('Weather data is undefined or missing properties.');}
    }

    get WeatherTemplate() {
        return `
        <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="weather-card text-center">
                <h2 id="${this.city}>City Name</h2>
                <p>Temperature: <span id=${this.temperature}>Temperature</span> &deg;C</p>
                <p>Feels Like: <span id=${this.feelsLike}>Feels Like</span> &deg;C</p>
                <p>Description: <span id=${this.description}>Description</span></p>
                <img id="weather-icon" class="weather-icon" src="placeholder.png" alt="Weather Icon">
                <p>Wind Speed: <span id=${this.windSpeed}>Wind Speed</span> m/s</p>
            </div>
        </div>
    </div>
</div>
        `
    }
    

}





