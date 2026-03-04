import { Command } from 'commander';
import { logger } from '../utils/logger';
import { JokeService } from '../services/jokeService';

export function registerJokeCommand(program: Command) {
  program
    .command('joke')
    .description('Get a random programming joke')
    .action(async () => {
      const jokeService = new JokeService();
      try {
        const data = await jokeService.getRandomJoke();
        logger.info(data.setup);
        logger.success(data.punchline);
      } catch (error: any) {
        logger.error('Failed to fetch joke: ' + error.message);
      }
    });
}
