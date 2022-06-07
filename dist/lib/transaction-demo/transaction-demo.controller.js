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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDemoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const create_demo_dto_1 = require("./dto/create-demo.dto");
const file_info_dto_1 = require("./dto/file-info.dto");
const transaction_demo_service_1 = require("./transaction-demo.service");
let TransactionDemoController = class TransactionDemoController {
    constructor(transactionDemoService) {
        this.transactionDemoService = transactionDemoService;
    }
    getDemoFunction(id) {
        return this.transactionDemoService.getDemoFunction(id);
    }
    postDemoFunction(createDemoDto) {
        return this.transactionDemoService.postDemoFunction(createDemoDto);
    }
    putDemoFunction(id, action) {
        return this.transactionDemoService.putDemoFunction(id, action);
    }
    deleteDemoFunction(id) {
        return this.transactionDemoService.deleteDemoFunction(id);
    }
    transactionMoreTableAtservice(createDemoDto) {
        return this.transactionDemoService.transactionMoreTableAtservice(createDemoDto);
    }
    async getPreSignedUrl(fileInfo) {
        return await this.transactionDemoService.getPreSignedUrlToUpload(fileInfo);
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Query('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionDemoController.prototype, "getDemoFunction", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_demo_dto_1.CreateDemoDto]),
    __metadata("design:returntype", void 0)
], TransactionDemoController.prototype, "postDemoFunction", null);
__decorate([
    common_1.Put(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Query('id')),
    __param(1, common_1.Query('action')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], TransactionDemoController.prototype, "putDemoFunction", null);
__decorate([
    common_1.Delete(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Query('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionDemoController.prototype, "deleteDemoFunction", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_demo_dto_1.CreateDemoDto]),
    __metadata("design:returntype", void 0)
], TransactionDemoController.prototype, "transactionMoreTableAtservice", null);
__decorate([
    common_1.Post('/image'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [file_info_dto_1.FileInfo]),
    __metadata("design:returntype", Promise)
], TransactionDemoController.prototype, "getPreSignedUrl", null);
TransactionDemoController = __decorate([
    common_1.Controller('transaction-demo'),
    __metadata("design:paramtypes", [transaction_demo_service_1.TransactionDemoService])
], TransactionDemoController);
exports.TransactionDemoController = TransactionDemoController;
//# sourceMappingURL=transaction-demo.controller.js.map