import chalk from 'chalk';
import { ILogger } from './i-logger.js';

export class InfoLogger extends ILogger {
  log(message: string) {
    console.log(chalk.green(`[INFO]: ${message}`));
  }
}