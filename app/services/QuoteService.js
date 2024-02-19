import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {

async getQuotes() {
    const response = await api.get('api/quotes')
    console.log ('got quotes', response.data)

    const newQuote = new Quote()
    console.log('new image',newQuote)
    AppState.Quote = newQuote
}
}




export const quoteService = new QuoteService()