import type { Client } from 'oicq';
import type { KiviConf } from '../config';
import type { KiviPlugin } from './plugin';
/** 通过插件路径禁用单个插件  */
export declare function disablePlugin(bot: Client, kiviConf: KiviConf, plugin: KiviPlugin, pluginPath: string): Promise<boolean>;
