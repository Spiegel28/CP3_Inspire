import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawQuotes() {
const quotes = AppState.Quote
setHTML('quote', quotes.QuoteTemplate)

}



export class QuoteController {
constructor() {
console.log('Quotes controller loaded')
this.getQuotes()
AppState.on('Quote', _drawQuotes)

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