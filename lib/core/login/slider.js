"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliderHandler = void 0;
const clipboardy_1 = __importDefault(require("clipboardy"));
const utils_1 = require("../../utils");
const logger_1 = require("../logger");
/** 滑块事件监听处理函数 */
function sliderHandler({ url, isFirst }) {
    const info = (msg, ...args) => {
        this.logger.warn(msg, ...args);
        logger_1.LskLogger.warn(msg, ...args);
    };
    if (isFirst) {
        clipboardy_1.default.writeSync(url);
        //need to verify slider, the verification link has been copied to clipboard, you can also copy url manually when needed:
        info(`需要验证滑块，验证链接已经复制到剪贴板，需要时也可以手动复制url: \n`);
        console.log(utils_1.colors.cyan(url) + '\n');
        info(`press \`Enter\` after inputing \`ticket\`:\n`);
    }
    const inputTicket = () => {
        process.stdin.once('data', (data) => {
            const ticket = String(data).trim();
            if (!ticket) {
                return inputTicket();
            }
            this.submitSlider(ticket);
        });
    };
    inputTicket();
}
exports.sliderHandler = sliderHandler;
