import axios from 'axios';

export class QuoteService {
  async getRandomQuote() {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data;
  }
}
