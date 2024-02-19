import { Pop } from "../utils/Pop.js"


function updateTime() {
    const currentDate = new Date();

    const currentTime = currentDate.toLocaleTimeString();

    const currentTimeElement = document.getElementById("currentTime");

    currentTimeElement.textContent = currentTime;
}


// Update the current time every second (1000 milliseconds)
setInterval(updateTime, 1000);

export class TimeController {
    constructor() {
        console.log('time controller loaded')
    updateTime();

    }

    

}