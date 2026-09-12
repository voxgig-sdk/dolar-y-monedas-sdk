import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Tarjeta, TarjetaLoadMatch } from '../DolarYMonedasTypes';
declare class TarjetaEntity extends DolarYMonedasEntityBase<Tarjeta> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: TarjetaEntity): TarjetaEntity;
    load(this: any, reqmatch?: TarjetaLoadMatch, ctrl?: Control): Promise<TarjetaEntity>;
}
export { TarjetaEntity };
