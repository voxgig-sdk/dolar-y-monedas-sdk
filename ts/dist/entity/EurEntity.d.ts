import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Eur, EurLoadMatch } from '../DolarYMonedasTypes';
declare class EurEntity extends DolarYMonedasEntityBase<Eur> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: EurEntity): EurEntity;
    load(this: any, reqmatch?: EurLoadMatch, ctrl?: Control): Promise<EurEntity>;
}
export { EurEntity };
