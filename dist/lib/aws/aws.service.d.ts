/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { AwsFileInfo } from './dto/aws-file-info.dto';
export declare class AwsService {
    private configService;
    AWS_S3_BUCKET_NAME: string;
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    s3: AWS.S3;
    constructor(configService: ConfigService);
    uploadFile(dataBuffer: Buffer, fileName: string): Promise<string>;
    generatePresignUrlToDownLoad(key: string): Promise<string>;
    getPreSignedUrlToUpload(awsFileInfo: AwsFileInfo): Promise<{
        code: number;
        url: string;
        awsError?: undefined;
    } | {
        code: number;
        awsError: any;
        url?: undefined;
    }>;
    escapeRegExpInFileName(fileName: string): Promise<{
        file_name: string;
    }>;
}
