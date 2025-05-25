import { InfoLogger } from "./info-logger.js";

export class InfoLoggerFactory {
    createLogger() {
        return new InfoLogger();
    }
}