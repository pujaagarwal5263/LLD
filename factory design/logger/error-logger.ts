import chalk from 'chalk';
import { ILogger } from './i-logger.js';

export class ErrorLogger extends ILogger {
  log(message: string) {
    console.log(chalk.red(`[ERROR]: ${message}`));
  }
}