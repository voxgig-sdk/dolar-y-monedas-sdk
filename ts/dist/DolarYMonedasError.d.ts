import { Context } from './Context';
declare class DolarYMonedasError extends Error {
    isDolarYMonedasError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { DolarYMonedasError };
