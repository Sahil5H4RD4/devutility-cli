#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("./cli");
const logger_1 = require("./utils/logger");
async function main() {
    try {
        (0, cli_1.setupCommands)();
        await cli_1.program.parseAsync(process.argv);
    }
    catch (error) {
        if (error instanceof Error) {
            logger_1.logger.error('Error: ' + error.message);
        }
        else {
            logger_1.logger.error('An unknown error occurred.');
        }
        process.exit(1);
    }
}
main();
//# sourceMappingURL=index.js.map