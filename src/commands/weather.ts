import { Command } from 'commander';
import { logger } from '../utils/logger';
import { WeatherService } from '../services/weatherService';

export function registerWeatherCommand(program: Command) {
  program
    .command('weather <city>')
    .description('Show weather for a city')
    .action(async (city: string) => {
      const weatherService = new WeatherService();
      try {
        const data = await weatherService.getWeather(city);
        logger.header(`Weather in ${city} 🌤`);
        logger.info(`Temperature: ${data.main.temp}°C`);
        logger.info(`Condition: ${data.weather[0].main}`);
      } catch (error: any) {
        if (error.response?.status === 401) {
          logger.error('Failed to fetch weather: Unauthorized. Please set a valid WEATHER_API_KEY environment variable.');
        } else {
          logger.error('Failed to fetch weather: ' + (error.response?.data?.message || error.message));
        }
      }
    });
}
