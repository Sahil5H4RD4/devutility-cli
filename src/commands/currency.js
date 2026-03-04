"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCurrencyCommand = registerCurrencyCommand;
const commander_1 = require("commander");
const logger_1 = require("../utils/logger");
const currencyService_1 = require("../services/currencyService");
function registerCurrencyCommand(program) {
    program
        .command('currency <base> <target>')
        .description('Convert currency values')
        .action(async (base, target) => {
        const currencyService = new currencyService_1.CurrencyService();
        try {
            const rate = await currencyService.convert(base, target);
            logger_1.logger.info(`1 ${base.toUpperCase()} = ${rate} ${target.toUpperCase()}`);
        }
        catch (error) {
            logger_1.logger.error('Failed to convert currency: ' + error.message);
        }
    });
}
//# sourceMappingURL=currency.js.map