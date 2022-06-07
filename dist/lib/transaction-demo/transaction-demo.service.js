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
exports.TransactionDemoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aws_service_1 = require("../aws/aws.service");
const aws_file_info_dto_1 = require("../aws/dto/aws-file-info.dto");
const aws_bucket_action_enum_1 = require("../aws/enum/aws-bucket-action.enum");
const storage_folder_name_enum_1 = require("../aws/enum/storage-folder-name.enum");
const typeorm_2 = require("typeorm");
const transaction_demo_repository_1 = require("./transaction-demo.repository");
let TransactionDemoService = class TransactionDemoService {
    constructor(transactionDemoRepository, connection, awsService) {
        this.transactionDemoRepository = transactionDemoRepository;
        this.connection = connection;
        this.awsService = awsService;
    }
    async getDemoFunction(id) {
        return this.transactionDemoRepository.getDemoFunction(id);
    }
    async postDemoFunction(createDemoDto) {
        return this.transactionDemoRepository.postDemoFunction(createDemoDto);
    }
    async putDemoFunction(id, action) {
        return this.transactionDemoRepository.putDemoFunction(id, action);
    }
    async deleteDemoFunction(id) {
        return this.transactionDemoRepository.deleteDemoFunction(id);
    }
    async transactionMoreTableAtservice(createDemoDto) {
        try {
            let demoEx;
            await this.connection.manager.transaction(async (transactionalEntityManager) => {
                if (demoEx.code === 200) {
                    await this.transactionDemoRepository.testTransaction1(createDemoDto.updated_by_user_id, createDemoDto.action, transactionalEntityManager);
                }
            });
            return demoEx;
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Error saving data to database");
        }
    }
    async getPreSignedUrlToUpload(fileInfo) {
        const response = await this.awsService.escapeRegExpInFileName(fileInfo.name);
        const awsFileInfo = new aws_file_info_dto_1.AwsFileInfo();
        awsFileInfo.bucketAction = aws_bucket_action_enum_1.AwsBucketAction.PutObject;
        awsFileInfo.key = `${storage_folder_name_enum_1.StorageFolderNameEnum.DEMO_PHOTO}/demo_image_${response.file_name}`;
        awsFileInfo.contentType = fileInfo.type;
        const awsResult = await this.awsService.getPreSignedUrlToUpload(awsFileInfo);
        if (awsResult.code === 200) {
            awsResult['key'] = awsFileInfo.key;
            return awsResult;
        }
    }
};
TransactionDemoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(transaction_demo_repository_1.TransactionDemoRepository)),
    __metadata("design:paramtypes", [transaction_demo_repository_1.TransactionDemoRepository,
        typeorm_2.Connection,
        aws_service_1.AwsService])
], TransactionDemoService);
exports.TransactionDemoService = TransactionDemoService;
//# sourceMappingURL=transaction-demo.service.js.map