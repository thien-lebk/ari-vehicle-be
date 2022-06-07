"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFeature = void 0;
class ApiFeature {
    static async assignJwtToken(userID, jwtService) {
        const payLoad = { id: userID };
        const token = await jwtService.sign(payLoad);
        return token;
    }
}
exports.ApiFeature = ApiFeature;
//# sourceMappingURL=apiFeatures.utils.js.map