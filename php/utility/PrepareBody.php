<?php
declare(strict_types=1);

// DolarYMonedas SDK utility: prepare_body

class DolarYMonedasPrepareBody
{
    public static function call(DolarYMonedasContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
