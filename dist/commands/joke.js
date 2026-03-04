"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerJokeCommand = registerJokeCommand;
const logger_1 = require("../utils/logger");
const jokeService_1 = require("../services/jokeService");
function registerJokeCommand(program) {
    program
        .command('joke')
        .description('Get a random programming joke')
        .action(async () => {
        const jokeService = new jokeService_1.JokeService();
        try {
            const data = await jokeService.getRandomJoke();
            logger_1.logger.info(data.setup);
            logger_1.logger.success(data.punchline);
        }
        catch (error) {
            logger_1.logger.error('Failed to fetch joke: ' + error.message);
        }
    });
}
