import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Estado, EstadoLoadMatch } from '../DolarYMonedasTypes';
declare class EstadoEntity extends DolarYMonedasEntityBase<Estado> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: EstadoEntity): EstadoEntity;
    load(this: any, reqmatch?: EstadoLoadMatch, ctrl?: Control): Promise<EstadoEntity>;
}
export { EstadoEntity };
