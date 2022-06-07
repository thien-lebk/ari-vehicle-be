import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    constructor(partial: Partial<User>);
    id: number;
    username: string;
    email: string;
    password: string;
    salt: string;
    is_active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    staff_id: string;
    is_first_login: string;
    start_date: Date;
    validatePassword(pass: string): Promise<boolean>;
    validateEmail(email: string): Promise<boolean>;
}
