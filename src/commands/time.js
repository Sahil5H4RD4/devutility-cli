"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTimeCommand = registerTimeCommand;
const commander_1 = require("commander");
const logger_1 = require("../utils/logger");
function registerTimeCommand(program) {
    program
        .command('time')
        .description('Show the current time')
        .action(() => {
        const now = new Date();
        logger_1.logger.info(`Current Time: ${now.toLocaleTimeString()}`);
    });
}
//# sourceMappingURL=time.js.map