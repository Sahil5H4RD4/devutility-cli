"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerGithubCommand = registerGithubCommand;
const logger_1 = require("../utils/logger");
const githubService_1 = require("../services/githubService");
function registerGithubCommand(program) {
    program
        .command('github <username>')
        .description('Show GitHub profile info')
        .action(async (username) => {
        const githubService = new githubService_1.GithubService();
        try {
            const data = await githubService.getUser(username);
            logger_1.logger.header(`GitHub Info for ${username}`);
            logger_1.logger.info(`Name: ${data.name || username}`);
            logger_1.logger.info(`Followers: ${data.followers}`);
            logger_1.logger.info(`Public repos: ${data.public_repos}`);
        }
        catch (error) {
            logger_1.logger.error('Failed to fetch github info: ' + error.message);
        }
    });
}
