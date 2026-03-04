"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerQuoteCommand = registerQuoteCommand;
const logger_1 = require("../utils/logger");
const quoteService_1 = require("../services/quoteService");
function registerQuoteCommand(program) {
    program
        .command('quote')
        .description('Get a random programming or motivational quote')
        .action(async () => {
        const quoteService = new quoteService_1.QuoteService();
        try {
            const data = await quoteService.getRandomQuote();
            logger_1.logger.info(`"${data.content}"`);
            if (data.author)
                logger_1.logger.success(`- ${data.author}`);
        }
        catch (error) {
            logger_1.logger.error('Failed to fetch quote: ' + error.message);
        }
    });
}
