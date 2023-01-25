"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enablePlugin = void 0;
const utils_1 = require("../../utils");
const getPluginNameByPath_1 = require("./getPluginNameByPath");
const logger_1 = require("../logger");
const pluginError_1 = require("./pluginError");
const start_1 = require("../start");
/** 通过插件模块路径启用单个插件 */
async function enablePlugin(bot, lskConf, pluginPath) {
    const error = (msg, ...args) => {
        bot.logger.error(msg, ...args);
        logger_1.LskLogger.error(msg, ...args);
    };
    const info = (msg, ...args) => {
        bot.logger.info(msg, ...args);
        logger_1.LskLogger.info(msg, ...args);
    };
    logger_1.LskLogger.debug('enablePlugin: ' + pluginPath);
    const pluginName = (0, getPluginNameByPath_1.getPluginNameByPath)(pluginPath);
    try {
        logger_1.LskLogger.debug('pluginPath: ' + pluginPath);
        const { plugin } = (await require(pluginPath));
        if (plugin && plugin?.mountLskBotClient) {
            try {
                await plugin.mountLskBotClient(bot, [...lskConf.admins]);
                start_1.plugins.set(pluginName, plugin);
                info(`plugin ${utils_1.colors.green(pluginName)} is now on`);
                return true;
            }
            catch (e) {
                logger_1.LskLogger.error(JSON.stringify(e, null, 2));
                if (e instanceof pluginError_1.LskPluginError) {
                    e.log();
                }
                else {
                    error(`error occurred during mount: \n${JSON.stringify(e, null, 2)}`);
                }
            }
        }
        else {
            error(utils_1.colors.red(`plugin ${utils_1.colors.green(pluginName)} dosen't export \`LskPlugin\` instance as \`plugin\``));
        }
    }
    catch (e) {
        logger_1.LskLogger.error(JSON.stringify(e, null, 2));
        if (e instanceof pluginError_1.LskPluginError) {
            e.log();
        }
        else {
            error(`error occurred during require: \n${JSON.stringify(e, null, 2)}`);
        }
    }
    start_1.plugins.delete(pluginName);
    return false;
}
exports.enablePlugin = enablePlugin;
