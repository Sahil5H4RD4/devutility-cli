"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRandomCommand = registerRandomCommand;
const logger_1 = require("../utils/logger");
function registerRandomCommand(program) {
    program
        .command('random')
        .description('Generate a random number')
        .action(() => {
        const num = Math.floor(Math.random() * 100000);
        logger_1.logger.success(`Random Number: ${num}`);
    });
}
