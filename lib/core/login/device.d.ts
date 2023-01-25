import type { Client } from 'oicq';
import type { KiviConf } from '../config';
/** 设备锁验证监听处理函数 */
export declare function deviceHandler(this: Client, device_mode: KiviConf['device_mode'], event: {
    url: string;
    phone: string;
}): Promise<void>;
