import { Command } from 'commander';
import { logger } from '../utils/logger';
import crypto from 'crypto';

export function registerUuidCommand(program: Command) {
  program
    .command('uuid')
    .description('Generate a UUID')
    .action(() => {
      const id = crypto.randomUUID();
      logger.info('Generated UUID:');
      logger.success(id);
    });
}
