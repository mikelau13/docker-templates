"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const logger_1 = __importDefault(require("../logger"));
/*
 Intercepting fetches for logger
 */
class PjxRESTDataSource extends apollo_datasource_rest_1.RESTDataSource {
    willSendRequest(request) {
        try {
            logger_1.default.info(`${this.constructor.name} request: ${this.baseURL}${request.path}`);
        }
        catch (err) {
            logger_1.default.info('Error logging request!');
        }
    }
}
exports.default = PjxRESTDataSource;
//# sourceMappingURL=PjxRESTDataSource.js.map