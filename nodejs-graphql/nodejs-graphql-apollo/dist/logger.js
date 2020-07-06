"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const level = process.env.LOG_LEVEL || 'debug';
const logger = winston_1.createLogger({
    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'MMMM DD, YYYY HH:mm:ss' }), winston_1.format.splat(), winston_1.format.json()),
    transports: [
        new winston_1.transports.Console({
            stderrLevels: ['error', 'critical', 'info', 'warn', 'debug', 'http', 'verbose', 'silly'],
        })
    ]
});
exports.default = logger;
//# sourceMappingURL=logger.js.map