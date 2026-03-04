import { Command } from 'commander';
import { logger } from '../utils/logger';
import { CurrencyService } from '../services/currencyService';

export function registerCurrencyCommand(program: Command) {
  program
    .command('currency <base> <target>')
    .description('Convert currency values')
    .action(async (base: string, target: string) => {
      const currencyService = new CurrencyService();
      try {
        const rate = await currencyService.convert(base, target);
        logger.info(`1 ${base.toUpperCase()} = ${rate} ${target.toUpperCase()}`);
      } catch (error: any) {
        logger.error('Failed to convert currency: ' + error.message);
      }
    });
}
