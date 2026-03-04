#!/usr/bin/env node
import { program, setupCommands } from './cli';
import { logger } from './utils/logger';

async function main() {
  try {
    setupCommands();
    await program.parseAsync(process.argv);
  } catch (error) {
    if (error instanceof Error) {
      logger.error('Error: ' + error.message);
    } else {
      logger.error('An unknown error occurred.');
    }
    process.exit(1);
  }
}

main();
