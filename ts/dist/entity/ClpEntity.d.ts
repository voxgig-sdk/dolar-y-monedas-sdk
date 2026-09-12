import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Clp, ClpLoadMatch } from '../DolarYMonedasTypes';
declare class ClpEntity extends DolarYMonedasEntityBase<Clp> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: ClpEntity): ClpEntity;
    load(this: any, reqmatch?: ClpLoadMatch, ctrl?: Control): Promise<ClpEntity>;
}
export { ClpEntity };
