import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Cripto, CriptoLoadMatch } from '../DolarYMonedasTypes';
declare class CriptoEntity extends DolarYMonedasEntityBase<Cripto> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: CriptoEntity): CriptoEntity;
    load(this: any, reqmatch?: CriptoLoadMatch, ctrl?: Control): Promise<CriptoEntity>;
}
export { CriptoEntity };
