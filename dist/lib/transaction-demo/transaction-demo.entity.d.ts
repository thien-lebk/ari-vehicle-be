import { BaseEntity } from "typeorm";
export declare class TransactionDemoEntity extends BaseEntity {
    id: number;
    demo_name: string;
    updated_by_user_id: number;
    action: string;
    created_at: Date;
}
