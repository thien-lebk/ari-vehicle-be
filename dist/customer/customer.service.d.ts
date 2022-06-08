import { EntityManager } from "typeorm";
import { Customer } from "./customer.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { signInDto } from "./dto/signin-user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class CustomerService {
    private jwtService;
    constructor(jwtService: JwtService);
    getAll(transactionManager: EntityManager): Promise<{
        statusCode: number;
        data: Customer[];
    }>;
    createUser(transactionManager: EntityManager, createUserDto: CreateUserDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    signIn(transactionManager: EntityManager, signInDto: signInDto): Promise<{}>;
}
