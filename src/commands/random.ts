import { Command } from 'commander';
import { logger } from '../utils/logger';

export function registerRandomCommand(program: Command) {
  program
    .command('random')
    .description('Generate a random number')
    .action(() => {
      const num = Math.floor(Math.random() * 100000);
      logger.success(`Random Number: ${num}`);
    });
}
