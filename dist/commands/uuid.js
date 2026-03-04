"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUuidCommand = registerUuidCommand;
const logger_1 = require("../utils/logger");
const crypto_1 = __importDefault(require("crypto"));
function registerUuidCommand(program) {
    program
        .command('uuid')
        .description('Generate a UUID')
        .action(() => {
        const id = crypto_1.default.randomUUID();
        logger_1.logger.info('Generated UUID:');
        logger_1.logger.success(id);
    });
}
