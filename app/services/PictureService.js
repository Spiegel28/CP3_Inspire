import { api } from "./AxiosService.js"

class PictureService {
async getRandomImage() {
    const response = await api.get('api/images')
    console.log('got random image', response.data)

}
}







export const pictureService = new PictureService()