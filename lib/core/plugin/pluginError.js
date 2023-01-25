"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LskPluginError = void 0;
const log4js_1 = __importDefault(require("log4js"));
/** LskBot 插件错误类 */
class LskPluginError extends Error {
    constructor(name, message) {
        super();
        this.name = 'LskPluginError';
        this.pluginName = name;
        this.message = message ?? '';
    }
    log() {
        const logger = log4js_1.default.getLogger('plugin');
        logger.error(`[${this.pluginName}] error occurred: ${this.message}`);
    }
}
exports.LskPluginError = LskPluginError;
