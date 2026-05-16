<?php
declare(strict_types=1);

// DolarYMonedas SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DolarYMonedasMakeContext
{
    public static function call(array $ctxmap, ?DolarYMonedasContext $basectx): DolarYMonedasContext
    {
        return new DolarYMonedasContext($ctxmap, $basectx);
    }
}
