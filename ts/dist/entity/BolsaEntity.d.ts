import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Bolsa, BolsaLoadMatch } from '../DolarYMonedasTypes';
declare class BolsaEntity extends DolarYMonedasEntityBase<Bolsa> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: BolsaEntity): BolsaEntity;
    load(this: any, reqmatch?: BolsaLoadMatch, ctrl?: Control): Promise<BolsaEntity>;
}
export { BolsaEntity };
