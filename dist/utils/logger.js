"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    success(message) {
        console.log(chalk_1.default.green(message));
    }
    error(message) {
        console.log(chalk_1.default.red.bold(message));
    }
    info(message) {
        console.log(chalk_1.default.blue(message));
    }
    warn(message) {
        console.log(chalk_1.default.yellow(message));
    }
    header(message) {
        console.log(chalk_1.default.bold.cyan('\n=== ' + message + ' ===\n'));
    }
    raw(message) {
        console.log(message);
    }
}
exports.Logger = Logger;
exports.logger = new Logger();
