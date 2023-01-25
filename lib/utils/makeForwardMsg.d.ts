import type { Client, Forwardable, XmlElem } from 'oicq';
export declare function makeForwardMsg(this: Client, msglist: Forwardable[] | Forwardable, title?: string, desc?: string, footer?: string, dm?: boolean): Promise<XmlElem>;
