import { AppState } from "../AppState.js";
import { backgroundImage1 } from "../models/BackgroundImage.js";
import { pictureService } from "../services/PictureService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawBackgroundImage() {
    const backgroundImage1 = AppState.backgroundImage1
    
    
    if (backgroundImage1){

    document.body.style.backgroundImage = `url(${backgroundImage1.imgUrl})`
    
    setHTML('imageInfo', backgroundImage1.InfoCardHTMLTemplate)
    }

}


export class PictureController {
    constructor() {
        console.log('PictureController Loaded');

        AppState.on('backgroundImage1', _drawBackgroundImage);

        this.getRandomImage();
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