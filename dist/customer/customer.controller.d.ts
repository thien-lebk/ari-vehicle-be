import { Connection } from "typeorm";
import { CustomerService } from "./customer.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { signInDto } from "./dto/signin-user.dto";
export declare class CustomerController {
    private connection;
    private customerService;
    constructor(connection: Connection, customerService: CustomerService);
    getAll(): Promise<{
        statusCode: number;
        data: import("./customer.entity").Customer[];
    }>;
    createUser(createUserDto: CreateUserDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    signIn(signInDto: signInDto): Promise<{}>;
}
