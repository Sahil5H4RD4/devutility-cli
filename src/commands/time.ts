import { Command } from 'commander';
import { logger } from '../utils/logger';

export function registerTimeCommand(program: Command) {
  program
    .command('time')
    .description('Show the current time')
    .action(() => {
      const now = new Date();
      logger.info(`Current Time: ${now.toLocaleTimeString()}`);
    });
}
