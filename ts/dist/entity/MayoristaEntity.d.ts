import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Mayorista, MayoristaLoadMatch } from '../DolarYMonedasTypes';
declare class MayoristaEntity extends DolarYMonedasEntityBase<Mayorista> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: MayoristaEntity): MayoristaEntity;
    load(this: any, reqmatch?: MayoristaLoadMatch, ctrl?: Control): Promise<MayoristaEntity>;
}
export { MayoristaEntity };
