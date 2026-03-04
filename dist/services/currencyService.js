"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
const axios_1 = __importDefault(require("axios"));
class CurrencyService {
    async convert(base, target) {
        base = base.toUpperCase();
        target = target.toUpperCase();
        const response = await axios_1.default.get(`https://api.exchangerate-api.com/v4/latest/${base}`);
        if (response.data && response.data.rates && response.data.rates[target]) {
            return response.data.rates[target];
        }
        throw new Error('Currency target not found');
    }
}
exports.CurrencyService = CurrencyService;
