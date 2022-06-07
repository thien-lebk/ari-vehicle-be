import { Repository, EntityManager } from "typeorm";
import { TransactionDemoEntity } from "./transaction-demo.entity";
export declare class TransactionDemoRepository extends Repository<TransactionDemoEntity> {
    getDemoFunction(id: any): Promise<{
        code: number;
        data: TransactionDemoEntity;
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
    testTransaction1(app_user_id: number, action: string, transactionalEntityManager: EntityManager): Promise<void>;
}
