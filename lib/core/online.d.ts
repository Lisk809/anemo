import type { Client } from 'oicq';
import type { KiviConf } from './config';
/** 监听上线事件，初始化 KiviBot */
export declare function onlineHandler(this: Client, kiviConf: KiviConf): Promise<void>;
