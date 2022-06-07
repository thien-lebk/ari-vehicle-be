import { CreateDemoDto } from './dto/create-demo.dto';
import { FileInfo } from './dto/file-info.dto';
import { TransactionDemoService } from './transaction-demo.service';
export declare class TransactionDemoController {
    private transactionDemoService;
    constructor(transactionDemoService: TransactionDemoService);
    getDemoFunction(id: number): Promise<{
        code: number;
        data: import("./transaction-demo.entity").TransactionDemoEntity;
        message?: undefined;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    postDemoFunction(createDemoDto: CreateDemoDto): Promise<{
        code: number;
        message: string;
    }>;
    putDemoFunction(id: number, action: string): Promise<{
        code: number;
        data: string;
        message?: undefined;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    deleteDemoFunction(id: number): Promise<{
        code: number;
        data: string;
        message?: undefined;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    transactionMoreTableAtservice(createDemoDto: CreateDemoDto): Promise<any>;
    getPreSignedUrl(fileInfo: FileInfo): Promise<{
        code: number;
        url: string;
        awsError?: undefined;
    } | {
        code: number;
        awsError: any;
        url?: undefined;
    }>;
}
