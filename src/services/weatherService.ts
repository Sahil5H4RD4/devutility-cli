import axios from 'axios';

export class WeatherService {
  async getWeather(city: string) {
    const apiKey = process.env.WEATHER_API_KEY || 'dummy_key';
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return response.data;
  }
}
