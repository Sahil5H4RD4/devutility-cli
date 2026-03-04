"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWeatherCommand = registerWeatherCommand;
const logger_1 = require("../utils/logger");
const weatherService_1 = require("../services/weatherService");
function registerWeatherCommand(program) {
    program
        .command('weather <city>')
        .description('Show weather for a city')
        .action(async (city) => {
        const weatherService = new weatherService_1.WeatherService();
        try {
            const data = await weatherService.getWeather(city);
            logger_1.logger.header(`Weather in ${city} 🌤`);
            logger_1.logger.info(`Temperature: ${data.main.temp}°C`);
            logger_1.logger.info(`Condition: ${data.weather[0].main}`);
        }
        catch (error) {
            logger_1.logger.error('Failed to fetch weather: ' + error.message);
        }
    });
}
