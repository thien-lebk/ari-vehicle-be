import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private health;
    private dns;
    private logger;
    constructor(health: HealthCheckService, dns: HttpHealthIndicator);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
