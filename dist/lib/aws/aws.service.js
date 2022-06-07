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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const AWS = require("aws-sdk");
const aws_bucket_action_enum_1 = require("./enum/aws-bucket-action.enum");
const aws_s3_acl_enum_1 = require("./enum/aws-s3-acl.enum");
let AwsService = class AwsService {
    constructor(configService) {
        this.configService = configService;
        this.AWS_S3_BUCKET_NAME = configService.get('AWS_S3_BUCKET_NAME');
        this.AWS_ACCESS_KEY_ID = configService.get('AWS_ACCESS_KEY_ID');
        this.AWS_SECRET_ACCESS_KEY = configService.get('AWS_SECRET_ACCESS_KEY');
        AWS.config.update({
            accessKeyId: this.AWS_ACCESS_KEY_ID,
            secretAccessKey: this.AWS_SECRET_ACCESS_KEY,
            region: 'ap-southeast-1'
        });
        this.s3 = new AWS.S3();
    }
    async uploadFile(dataBuffer, fileName) {
        const uploadResult = await this.s3.upload({
            Bucket: this.AWS_S3_BUCKET_NAME,
            Body: dataBuffer,
            Key: fileName
        }).promise();
        return uploadResult.Key;
    }
    async generatePresignUrlToDownLoad(key) {
        return await this.s3.getSignedUrlPromise(aws_bucket_action_enum_1.AwsBucketAction.GetObject, {
            Bucket: this.AWS_S3_BUCKET_NAME,
            Key: key
        });
    }
    async getPreSignedUrlToUpload(awsFileInfo) {
        try {
            const url = this.s3.getSignedUrl(awsFileInfo.bucketAction, {
                Bucket: this.AWS_S3_BUCKET_NAME,
                Key: awsFileInfo.key,
                Expires: 60,
                ACL: aws_s3_acl_enum_1.S3AclType.PUBLIC_READ,
                ContentType: awsFileInfo.contentType
            });
            return { code: 200, url };
        }
        catch (error) {
            return { code: 500, awsError: error };
        }
    }
    async escapeRegExpInFileName(fileName) {
        return { file_name: fileName.replace(/[*!.=_,@&;: +\-?^${}()|/]/g, '3DD').substr(0, 150) };
    }
};
AwsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsService);
exports.AwsService = AwsService;
//# sourceMappingURL=aws.service.js.map