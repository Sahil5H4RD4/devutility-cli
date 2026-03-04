import { Command } from 'commander';
import { logger } from '../utils/logger';
import { QuoteService } from '../services/quoteService';

export function registerQuoteCommand(program: Command) {
  program
    .command('quote')
    .description('Get a random programming or motivational quote')
    .action(async () => {
      const quoteService = new QuoteService();
      try {
        const data = await quoteService.getRandomQuote();
        logger.info(`"${data.content}"`);
        if (data.author) logger.success(`- ${data.author}`);
      } catch (error: any) {
        logger.error('Failed to fetch quote: ' + error.message);
      }
    });
}
