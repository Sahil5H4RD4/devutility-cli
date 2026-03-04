"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFileInfoCommand = registerFileInfoCommand;
const commander_1 = require("commander");
const logger_1 = require("../utils/logger");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function registerFileInfoCommand(program) {
    program
        .command('fileinfo <filepath>')
        .description('Show file information (size, created date)')
        .action((filepath) => {
        try {
            const stats = fs_1.default.statSync(filepath);
            const kbSize = (stats.size / 1024).toFixed(2);
            logger_1.logger.header('File Info');
            logger_1.logger.info(`File: ${path_1.default.basename(filepath)}`);
            logger_1.logger.info(`Size: ${kbSize} KB`);
            logger_1.logger.info(`Created: ${stats.birthtime.toDateString()}`);
        }
        catch (error) {
            logger_1.logger.error('Failed to read file info: ' + error.message);
        }
    });
}
//# sourceMappingURL=fileinfo.js.map