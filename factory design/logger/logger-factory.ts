import { logType } from "../types/log-type.js";
import { DebugLogger } from "./debug-logger.js";
import { InfoLogger } from "./info-logger.js";
import { ErrorLogger } from "./error-logger.js";

export class LoggerFactory {
  static createLogger(level: logType) {
    // simple factory pattern with switch case
    switch (level) {
      case logType.DEBUG:
        return new DebugLogger();
      case logType.INFO:
        return new InfoLogger();
      case logType.ERROR:
        return new ErrorLogger();
      default:
        throw new Error("Invalid log level");
    }
  }
}
