import chalk from "chalk";
import { ILogger } from "./i-logger.js";

export class DebugLogger extends ILogger {
  log(message: string) {
    console.log(chalk.blue(`[DEBUG]: ${message}`));
  }
}
