<?php
declare(strict_types=1);

// DolarYMonedas SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DolarYMonedasFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DolarYMonedasBaseFeature();
            case "test":
                return new DolarYMonedasTestFeature();
            default:
                return new DolarYMonedasBaseFeature();
        }
    }
}
