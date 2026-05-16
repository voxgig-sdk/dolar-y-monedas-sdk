<?php
declare(strict_types=1);

// DolarYMonedas SDK base feature

class DolarYMonedasBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DolarYMonedasContext $ctx, array $options): void {}
    public function PostConstruct(DolarYMonedasContext $ctx): void {}
    public function PostConstructEntity(DolarYMonedasContext $ctx): void {}
    public function SetData(DolarYMonedasContext $ctx): void {}
    public function GetData(DolarYMonedasContext $ctx): void {}
    public function GetMatch(DolarYMonedasContext $ctx): void {}
    public function SetMatch(DolarYMonedasContext $ctx): void {}
    public function PrePoint(DolarYMonedasContext $ctx): void {}
    public function PreSpec(DolarYMonedasContext $ctx): void {}
    public function PreRequest(DolarYMonedasContext $ctx): void {}
    public function PreResponse(DolarYMonedasContext $ctx): void {}
    public function PreResult(DolarYMonedasContext $ctx): void {}
    public function PreDone(DolarYMonedasContext $ctx): void {}
    public function PreUnexpected(DolarYMonedasContext $ctx): void {}
}
