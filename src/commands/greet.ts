import { Command } from 'commander';
import { logger } from '../utils/logger';

export function registerGreetCommand(program: Command) {
  program
    .command('greet <name>')
    .description('Greet the user')
    .action((name: string) => {
      logger.success(`Hello ${name}! Welcome to DevUtility CLI 🚀`);
    });
}
