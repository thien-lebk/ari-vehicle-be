"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronJobModule = void 0;
const common_1 = require("@nestjs/common");
const cron_job_service_1 = require("./cron-job.service");
const cron_job_controller_1 = require("./cron-job.controller");
let CronJobModule = class CronJobModule {
};
CronJobModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [cron_job_service_1.CronJobService],
        controllers: [cron_job_controller_1.CronJobController]
    })
], CronJobModule);
exports.CronJobModule = CronJobModule;
//# sourceMappingURL=cron-job.module.js.map