import { Pop } from "../utils/Pop.js"

export class TimeController {
    constructor() {
        console.log('time controller loaded')
    }

    async getTime() {
        try{
            await timeService.getTime()
            Pop.success('Got Time')
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}