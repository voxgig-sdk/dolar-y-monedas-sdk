import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { Cotizacione, CotizacioneListMatch } from '../DolarYMonedasTypes';
declare class CotizacioneEntity extends DolarYMonedasEntityBase<Cotizacione> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: CotizacioneEntity): CotizacioneEntity;
    list(this: any, reqmatch?: CotizacioneListMatch, ctrl?: Control): Promise<CotizacioneEntity[]>;
}
export { CotizacioneEntity };
