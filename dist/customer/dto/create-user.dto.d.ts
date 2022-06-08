export declare enum UserRole {
    MANAGER = "manager",
    LEADER = "leader",
    STAFF = "STAFF"
}
export declare class CreateUserDto {
    name: string;
    username: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    role: number;
    team: number;
}
