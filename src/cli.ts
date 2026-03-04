import { Command } from 'commander';

export const program = new Command();

program
  .name('devutil')
  .description('DevUtility CLI - A developer helper tool')
  .version('1.0.0');

export function setupCommands() {
  // Commands will be registered here
}
