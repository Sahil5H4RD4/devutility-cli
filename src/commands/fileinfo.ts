import { Command } from 'commander';
import { logger } from '../utils/logger';
import fs from 'fs';
import path from 'path';

export function registerFileInfoCommand(program: Command) {
  program
    .command('fileinfo <filepath>')
    .description('Show file information (size, created date)')
    .action((filepath: string) => {
      try {
        const stats = fs.statSync(filepath);
        const kbSize = (stats.size / 1024).toFixed(2);
        
        logger.header('File Info');
        logger.info(`File: ${path.basename(filepath)}`);
        logger.info(`Size: ${kbSize} KB`);
        logger.info(`Created: ${stats.birthtime.toDateString()}`);
      } catch (error: any) {
        logger.error('Failed to read file info: ' + error.message);
      }
    });
}
