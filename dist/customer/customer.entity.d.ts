import { BaseEntity } from "typeorm";
export declare enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
export declare class Customer extends BaseEntity {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    role: number;
    team: number;
}
