import { BaseEntity } from "typeorm";
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export declare class Customer extends BaseEntity {
    id: number;
    full_name: string;
    user_name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    role: UserRole;
}
