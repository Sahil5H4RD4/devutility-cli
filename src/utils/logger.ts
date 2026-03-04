import chalk from 'chalk';

export class Logger {
  success(message: string): void {
    console.log(chalk.green(message));
  }
  
  error(message: string): void {
    console.log(chalk.red.bold(message));
  }

  info(message: string): void {
    console.log(chalk.blue(message));
  }

  warn(message: string): void {
    console.log(chalk.yellow(message));
  }

  header(message: string): void {
    console.log(chalk.bold.cyan('\n=== ' + message + ' ===\n'));
  }

  raw(message: string): void {
    console.log(message);
  }
}

export const logger = new Logger();
