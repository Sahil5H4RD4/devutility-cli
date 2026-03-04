"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.program = void 0;
exports.setupCommands = setupCommands;
const commander_1 = require("commander");
const greet_1 = require("./commands/greet");
const weather_1 = require("./commands/weather");
const github_1 = require("./commands/github");
const quote_1 = require("./commands/quote");
const joke_1 = require("./commands/joke");
const fileinfo_1 = require("./commands/fileinfo");
const uuid_1 = require("./commands/uuid");
const time_1 = require("./commands/time");
const random_1 = require("./commands/random");
const currency_1 = require("./commands/currency");
exports.program = new commander_1.Command();
exports.program
    .name('devutil')
    .description('DevUtility CLI - A developer helper tool')
    .version('1.0.0');
function setupCommands() {
    (0, greet_1.registerGreetCommand)(exports.program);
    (0, weather_1.registerWeatherCommand)(exports.program);
    (0, github_1.registerGithubCommand)(exports.program);
    (0, quote_1.registerQuoteCommand)(exports.program);
    (0, joke_1.registerJokeCommand)(exports.program);
    (0, fileinfo_1.registerFileInfoCommand)(exports.program);
    (0, uuid_1.registerUuidCommand)(exports.program);
    (0, time_1.registerTimeCommand)(exports.program);
    (0, random_1.registerRandomCommand)(exports.program);
    (0, currency_1.registerCurrencyCommand)(exports.program);
}
//# sourceMappingURL=cli.js.map