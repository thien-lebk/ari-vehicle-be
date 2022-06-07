"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDemoModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_demo_service_1 = require("./transaction-demo.service");
const transaction_demo_controller_1 = require("./transaction-demo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_demo_repository_1 = require("./transaction-demo.repository");
const aws_module_1 = require("../aws/aws.module");
let TransactionDemoModule = class TransactionDemoModule {
};
TransactionDemoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaction_demo_repository_1.TransactionDemoRepository]), aws_module_1.AwsModule],
        providers: [transaction_demo_service_1.TransactionDemoService],
        controllers: [transaction_demo_controller_1.TransactionDemoController],
        exports: [transaction_demo_service_1.TransactionDemoService],
    })
], TransactionDemoModule);
exports.TransactionDemoModule = TransactionDemoModule;
//# sourceMappingURL=transaction-demo.module.js.map