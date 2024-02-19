import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";

export class QuoteController {
constructor() {
console.log('Quotes controller loaded')
this.getQuotes()
}



async getQuotes() {
    try{
        await quoteService.getQuotes()
        Pop.success('got quotes')
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}
}