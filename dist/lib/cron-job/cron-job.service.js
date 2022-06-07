"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CronJobService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronJobService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
let CronJobService = CronJobService_1 = class CronJobService {
    constructor() {
        this.logger = new common_1.Logger(CronJobService_1.name);
    }
    async CronExample() {
        this.logger.debug('CronExample run every 12:00 AM');
        if (!this.checkCronJobProcess()) {
            return;
        }
        else {
        }
    }
    checkCronJobProcess() {
        if (process.env.NODE_APP_INSTANCE === '0' || process.env.NODE_APP_INSTANCE === null || process.env.NODE_APP_INSTANCE === undefined) {
            this.logger.debug(`CONTINUE JOB AT PROCESS ${process.env.NODE_APP_INSTANCE}`);
            return true;
        }
        else {
            this.logger.debug(`CANCEL JOB AT PROCESS ${process.env.NODE_APP_INSTANCE}`);
            return false;
        }
    }
};
__decorate([
    schedule_1.Cron(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT, { timeZone: 'Singapore' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronJobService.prototype, "CronExample", null);
CronJobService = CronJobService_1 = __decorate([
    common_1.Injectable()
], CronJobService);
exports.CronJobService = CronJobService;
//# sourceMappingURL=cron-job.service.js.map