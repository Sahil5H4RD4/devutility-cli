"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerGreetCommand = registerGreetCommand;
const commander_1 = require("commander");
const logger_1 = require("../utils/logger");
function registerGreetCommand(program) {
    program
        .command('greet <name>')
        .description('Greet the user')
        .action((name) => {
        logger_1.logger.success(`Hello ${name}! Welcome to DevUtility CLI 🚀`);
    });
}
//# sourceMappingURL=greet.js.map