"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disablePlugin = void 0;
const utils_1 = require("../../utils");
const getPluginNameByPath_1 = require("./getPluginNameByPath");
const killPlugin_1 = require("./killPlugin");
const logger_1 = require("../logger");
const pluginError_1 = require("./pluginError");
/** 通过插件路径禁用单个插件  */
async function disablePlugin(bot, lskConf, plugin, pluginPath) {
    const error = (msg, ...args) => {
        bot.logger.error(msg, ...args);
        logger_1.LskLogger.error(msg, ...args);
    };
    const info = (msg, ...args) => {
        bot.logger.info(msg, ...args);
        logger_1.LskLogger.info(msg, ...args);
    };
    logger_1.LskLogger.debug('disablePlugin: ' + pluginPath);
    const pluginName = (0, getPluginNameByPath_1.getPluginNameByPath)(pluginPath);
    try {
        // 调用插件挂载的禁用函数
        await plugin.unmountLskBotClient(bot, [...lskConf.admins]);
        // 删除 require 缓存
        (0, killPlugin_1.killPlugin)(pluginPath);
        info(`plugin ${utils_1.colors.green(pluginName)} is now off`);
        return true;
    }
    catch (e) {
        logger_1.LskLogger.error(JSON.stringify(e, null, 2));
        if (e instanceof pluginError_1.LskPluginError) {
            e.log();
        }
        else {
            error(`error occurred during unmount: \n${JSON.stringify(e, null, 2)}`);
        }
    }
    return false;
}
exports.disablePlugin = disablePlugin;
