"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchResolverErrors = void 0;
const constants_1 = require("../constants");
exports.catchResolverErrors = (resolverFn) => async (obj, args, context, info) => {
    try {
        const result = await resolverFn(obj, args, context, info);
        return result;
    }
    catch (err) {
        info.cacheControl.setCacheHint({ maxAge: constants_1.CACHE_TIMES.NO_CACHE });
        return err;
    }
};
//# sourceMappingURL=resolverUtils.js.map