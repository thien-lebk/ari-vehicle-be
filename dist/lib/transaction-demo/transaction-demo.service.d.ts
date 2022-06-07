import { AwsService } from 'src/lib/aws/aws.service';
import { Connection } from 'typeorm';
import { TransactionDemoRepository } from './transaction-demo.repository';
export declare class TransactionDemoService {
    private transactionDemoRepository;
    private connection;
    private awsService;
    constructor(transactionDemoRepository: TransactionDemoRepository, connection: Connection, awsService: AwsService);
    getDemoFunction(id: any): Promise<{
        code: number;
        data: import("./transaction-demo.entity").TransactionDemoEntity;
        message?: undefined;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    postDemoFunction(createDemoDto: any): Promise<{
        code: number;
        message: string;
    }>;
    putDemoFunction(id: any, action: any): Promise<{
        code: number;
        data: string;
        message?: undefined;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    deleteDemoFunction(id: any): Promise<{
        code: number;
        data: string;
        message?: undefined;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    transactionMoreTableAtservice(createDemoDto: any): Promise<any>;
    getPreSignedUrlToUpload(fileInfo: any): Promise<{
        code: number;
        url: string;
        awsError?: undefined;
    } | {
        code: number;
        awsError: any;
        url?: undefined;
    }>;
}
