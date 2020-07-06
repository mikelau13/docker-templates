"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transforms_1 = require("../transforms/transforms");
const PjxRESTDataSource_1 = __importDefault(require("./PjxRESTDataSource"));
class NodeAPI extends PjxRESTDataSource_1.default {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8081/api/1';
    }
    async getAllCities() {
        const results = await this.get('/cities');
        return transforms_1.transformCities(results);
    }
    async getCityById(id) {
        const result = await this.get(`/city/${id}`);
        if (result.length > 0) {
            return transforms_1.transformCity(result[0]);
        }
        else {
            return {};
        }
    }
}
exports.default = NodeAPI;
//# sourceMappingURL=NodeApi.js.map