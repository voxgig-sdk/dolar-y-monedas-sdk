import { DolarYMonedasEntityBase } from '../DolarYMonedasEntityBase';
import type { DolarYMonedasSDK } from '../DolarYMonedasSDK';
import type { Control } from '../types';
import type { CotizacionAmbito, CotizacionAmbitoLoadMatch, CotizacionAmbitoListMatch } from '../DolarYMonedasTypes';
declare class CotizacionAmbitoEntity extends DolarYMonedasEntityBase<CotizacionAmbito> {
    constructor(client: DolarYMonedasSDK, entopts: any);
    make(this: CotizacionAmbitoEntity): CotizacionAmbitoEntity;
    load(this: any, reqmatch?: CotizacionAmbitoLoadMatch, ctrl?: Control): Promise<CotizacionAmbitoEntity>;
    list(this: any, reqmatch?: CotizacionAmbitoListMatch, ctrl?: Control): Promise<CotizacionAmbitoEntity[]>;
}
export { CotizacionAmbitoEntity };
