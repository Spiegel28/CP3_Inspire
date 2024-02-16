import { AppState } from "../AppState.js"
import { backgroundImage1 } from "../models/BackgroundImage.js"
import { api } from "./AxiosService.js"

class PictureService {
async getRandomImage() {
    const response = await api.get('api/images')
    console.log('got random image', response.data)
    const newImage = new backgroundImage1(response.data)
    console.log('new image',newImage)
    AppState.backgroundImage1 = newImage

}
}







export const pictureService = new PictureService()