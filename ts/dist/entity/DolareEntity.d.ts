import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Dolare, DolareListMatch } from '../DolarYMonedasTypes';
declare class DolareEntity extends DolarYMonedasEntityBase<Dolare> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: DolareEntity): DolareEntity;
    list(this: any, reqmatch?: DolareListMatch, ctrl?: Control): Promise<DolareEntity[]>;
}
export { DolareEntity };
