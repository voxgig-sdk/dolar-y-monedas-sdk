import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Contadoconliqui, ContadoconliquiLoadMatch } from '../DolarYMonedasTypes';
declare class ContadoconliquiEntity extends DolarYMonedasEntityBase<Contadoconliqui> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: ContadoconliquiEntity): ContadoconliquiEntity;
    load(this: any, reqmatch?: ContadoconliquiLoadMatch, ctrl?: Control): Promise<ContadoconliquiEntity>;
}
export { ContadoconliquiEntity };
