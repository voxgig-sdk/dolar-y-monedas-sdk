"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DolarYMonedasError = void 0;
class DolarYMonedasError extends Error {
    isDolarYMonedasError = true;
    sdk = 'DolarYMonedas';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.DolarYMonedasError = DolarYMonedasError;
//# sourceMappingURL=DolarYMonedasError.js.map