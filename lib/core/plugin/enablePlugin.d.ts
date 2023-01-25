import type { Client } from 'oicq';
import type { KiviConf } from '../config';
/** 通过插件模块路径启用单个插件 */
export declare function enablePlugin(bot: Client, kiviConf: KiviConf, pluginPath: string): Promise<boolean>;
