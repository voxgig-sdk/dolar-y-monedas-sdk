<?php
declare(strict_types=1);

// DolarYMonedas SDK utility: feature_add

class DolarYMonedasFeatureAdd
{
    public static function call(DolarYMonedasContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
