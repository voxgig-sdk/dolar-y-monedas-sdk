<?php
declare(strict_types=1);

// DolarYMonedas SDK utility: result_body

class DolarYMonedasResultBody
{
    public static function call(DolarYMonedasContext $ctx): ?DolarYMonedasResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
