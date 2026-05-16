<?php
declare(strict_types=1);

// DolarYMonedas SDK utility: result_headers

class DolarYMonedasResultHeaders
{
    public static function call(DolarYMonedasContext $ctx): ?DolarYMonedasResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
