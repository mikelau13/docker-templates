"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCities = exports.transformCity = void 0;
exports.transformCity = (result = {}) => {
    return {
        id: result.id,
        name: result.name,
        city: result.city
    };
};
exports.transformCities = (results = {}) => {
    if (!Array.isArray(results.items)) {
        return [];
    }
    return results[0].cities.map(item => {
        return exports.transformCity(item);
    });
};
//# sourceMappingURL=transforms.js.map