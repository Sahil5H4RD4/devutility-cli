"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeService = void 0;
const axios_1 = __importDefault(require("axios"));
class JokeService {
    async getRandomJoke() {
        const response = await axios_1.default.get('https://official-joke-api.appspot.com/random_joke');
        return response.data;
    }
}
exports.JokeService = JokeService;
