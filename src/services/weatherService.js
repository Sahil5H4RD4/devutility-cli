"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const axios_1 = __importDefault(require("axios"));
class WeatherService {
    async getWeather(city) {
        const apiKey = process.env.WEATHER_API_KEY || 'dummy_key';
        const response = await axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        return response.data;
    }
}
exports.WeatherService = WeatherService;
//# sourceMappingURL=weatherService.js.map