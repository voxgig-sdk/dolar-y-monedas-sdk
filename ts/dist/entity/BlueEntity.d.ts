import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Blue, BlueLoadMatch } from '../DolarYMonedasTypes';
declare class BlueEntity extends DolarYMonedasEntityBase<Blue> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: BlueEntity): BlueEntity;
    load(this: any, reqmatch?: BlueLoadMatch, ctrl?: Control): Promise<BlueEntity>;
}
export { BlueEntity };
