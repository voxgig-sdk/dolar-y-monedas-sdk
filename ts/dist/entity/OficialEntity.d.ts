import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Oficial, OficialLoadMatch } from '../DolarYMonedasTypes';
declare class OficialEntity extends DolarYMonedasEntityBase<Oficial> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: OficialEntity): OficialEntity;
    load(this: any, reqmatch?: OficialLoadMatch, ctrl?: Control): Promise<OficialEntity>;
}
export { OficialEntity };
