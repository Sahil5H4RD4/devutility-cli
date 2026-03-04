import axios from 'axios';

export class CurrencyService {
  async convert(base: string, target: string) {
    base = base.toUpperCase();
    target = target.toUpperCase();
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${base}`);
    if (response.data && response.data.rates && response.data.rates[target]) {
      return response.data.rates[target];
    }
    throw new Error('Currency target not found');
  }
}
