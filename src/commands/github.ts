import { Command } from 'commander';
import { logger } from '../utils/logger';
import { GithubService } from '../services/githubService';

export function registerGithubCommand(program: Command) {
  program
    .command('github <username>')
    .description('Show GitHub profile info')
    .action(async (username: string) => {
      const githubService = new GithubService();
      try {
        const data = await githubService.getUser(username);
        logger.header(`GitHub Info for ${username}`);
        logger.info(`Name: ${data.name || username}`);
        logger.info(`Followers: ${data.followers}`);
        logger.info(`Public repos: ${data.public_repos}`);
      } catch (error: any) {
        logger.error('Failed to fetch github info: ' + error.message);
      }
    });
}
