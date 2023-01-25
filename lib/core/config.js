"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveLskConf = exports.lskConf = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("./path");
const logger_1 = require("./logger");
const start_1 = require("./start");
exports.lskConf = {};
/** 保存 LskBot 框架配置到配置文件`lsk.json` */
const saveLskConf = (_plugins) => {
    try {
        exports.lskConf.plugins = [...(_plugins ?? start_1.plugins).keys()];
        (0, fs_extra_1.writeJsonSync)(path_1.ConfigPath, exports.lskConf, { encoding: 'utf-8', spaces: 2 });
        return true;
    }
    catch (e) {
        logger_1.LskLogger.error(JSON.stringify(e, null, 2));
        return false;
    }
};
exports.saveLskConf = saveLskConf;
