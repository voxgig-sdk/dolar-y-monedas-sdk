import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Uyu, UyuLoadMatch } from '../DolarYMonedasTypes';
declare class UyuEntity extends DolarYMonedasEntityBase<Uyu> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: UyuEntity): UyuEntity;
    load(this: any, reqmatch?: UyuLoadMatch, ctrl?: Control): Promise<UyuEntity>;
}
export { UyuEntity };
