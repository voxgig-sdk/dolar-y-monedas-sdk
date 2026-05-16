<?php
declare(strict_types=1);

// DolarYMonedas SDK exists test

require_once __DIR__ . '/../dolarymonedas_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DolarYMonedasSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
