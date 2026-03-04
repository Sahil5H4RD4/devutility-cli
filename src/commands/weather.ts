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
        logger.error('Failed to fetch weather: ' + error.message);
      }
    });
}
