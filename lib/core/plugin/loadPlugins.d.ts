import type { Client } from 'oicq';
import type { KiviConf } from '../config';
/** 检索并加载 node_modules 和 plugins 目录下的插件 */
export declare function loadPlugins(bot: Client, kiviConf: KiviConf): Promise<{
    all: number;
    npm: number;
    local: number;
    cnt: number;
}>;
