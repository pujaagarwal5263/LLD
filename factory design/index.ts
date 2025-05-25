import { LoggerFactory } from "./logger/logger-factory.js";
import { logType } from "./types/log-type.js";

// factory - method: creating a separate logger class for each log type
//import { InfoLoggerFactory } from "./logger/info-logger-factory.js";

// const loggerFactory1 = new InfoLoggerFactory()
// const infoLogger =loggerFactory1.createLogger()
// infoLogger.log("This is a info log msg");

const debugLogger = LoggerFactory.createLogger(logType.DEBUG);
debugLogger.log("This is a debug log msg");

const infoLogger = LoggerFactory.createLogger(logType.INFO);
infoLogger.log("This is an info log msg");

const errorLogger = LoggerFactory.createLogger(logType.ERROR);
errorLogger.log("This is an error log msg");