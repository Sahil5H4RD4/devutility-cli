import { Command } from 'commander';
import { registerGreetCommand } from './commands/greet';
import { registerWeatherCommand } from './commands/weather';
import { registerGithubCommand } from './commands/github';
import { registerQuoteCommand } from './commands/quote';
import { registerJokeCommand } from './commands/joke';
import { registerFileInfoCommand } from './commands/fileinfo';
import { registerUuidCommand } from './commands/uuid';
import { registerTimeCommand } from './commands/time';
import { registerRandomCommand } from './commands/random';
import { registerCurrencyCommand } from './commands/currency';

export const program = new Command();

program
  .name('devutil')
  .description('DevUtility CLI - A developer helper tool')
  .version('1.0.0');

export function setupCommands() {
  registerGreetCommand(program);
  registerWeatherCommand(program);
  registerGithubCommand(program);
  registerQuoteCommand(program);
  registerJokeCommand(program);
  registerFileInfoCommand(program);
  registerUuidCommand(program);
  registerTimeCommand(program);
  registerRandomCommand(program);
  registerCurrencyCommand(program);
}
