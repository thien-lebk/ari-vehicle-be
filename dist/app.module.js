"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_prometheus_1 = require("@willsoto/nestjs-prometheus");
const schedule_1 = require("@nestjs/schedule");
const cron_job_module_1 = require("./lib/cron-job/cron-job.module");
const health_controller_1 = require("./lib/health/health.controller");
const terminus_1 = require("@nestjs/terminus");
const aws_module_1 = require("./lib/aws/aws.module");
const app_gateway_1 = require("./app.gateway");
const customer_module_1 = require("./customer/customer.module");
const user_module_1 = require("./user/user.module");
const car_module_1 = require("./car/car.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_prometheus_1.PrometheusModule.register(),
            config_1.ConfigModule.forRoot({
                envFilePath: `env/${process.env.NODE_ENV || "local"}.env`,
            }),
            schedule_1.ScheduleModule.forRoot(),
            cron_job_module_1.CronJobModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: configService.get("TYPEORM_DATABASE_TYPE"),
                    host: configService.get("TYPEORM_DATABASE_HOST"),
                    port: Number(configService.get("TYPEORM_DATABASE_PORT")),
                    username: configService.get("TYPEORM_DATABASE_USERNAME"),
                    password: configService.get("TYPEORM_DATABASE_PASSWORD"),
                    database: configService.get("TYPEORM_DATABASE_NAME"),
                    entities: [__dirname + "/**/*.entity{.ts,.js}"],
                    synchronize: false,
                    logging: false,
                    useUTC: false,
                    uuidExtension: "uuid-ossp",
                }),
            }),
            terminus_1.TerminusModule,
            aws_module_1.AwsModule,
            customer_module_1.CustomerModule,
            user_module_1.UserModule,
            car_module_1.CarModule,
        ],
        controllers: [health_controller_1.HealthController],
        providers: [app_gateway_1.AppGateway],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map