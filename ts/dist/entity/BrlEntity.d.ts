import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Brl, BrlLoadMatch } from '../DolarYMonedasTypes';
declare class BrlEntity extends DolarYMonedasEntityBase<Brl> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: BrlEntity): BrlEntity;
    load(this: any, reqmatch?: BrlLoadMatch, ctrl?: Control): Promise<BrlEntity>;
}
export { BrlEntity };
