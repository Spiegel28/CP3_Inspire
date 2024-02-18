import { api } from "./AxiosService.js"


class TimeService {

    async getTime() {
        const response = await api.get('api/time')
    }
}






export const timeService = new TimeService()