import { AppState } from "../AppState.js";
import { pictureService } from "../services/PictureService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawBackgroundImage() {
    const backgroundImage = AppState.backgroundImage
    document.body.style.backgroundImage = `url(${backgroundImage.imgUrl})`
    setHTML('imageInfo', backgroundImage.InfoCardHTMLTemplate)
}


export class PictureController {
    constructor() {
        console.log('PictureController Loaded');

        this.getRandomImage()
    }
    async getRandomImage() {
        try {
            await pictureService.getRandomImage()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}