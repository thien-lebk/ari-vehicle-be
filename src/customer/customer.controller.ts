import { Body, Controller, Get, Post } from "@nestjs/common";
import { Connection } from "typeorm";
import { CustomerService } from "./customer.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { signInDto } from "./dto/signin-user.dto";
@Controller("customer")
export class CustomerController {
  constructor(
    private connection: Connection,
    private customerService: CustomerService
  ) {}

  // Demo transaction
  @Get()
  async getAll() {
    return await this.connection.transaction((transactionManager) => {
      return this.customerService.getAll(transactionManager);
    });
  }

  @Post("/sign-up")
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.connection.transaction((transactionManager) => {
      return this.customerService.createUser(transactionManager, createUserDto);
    });
  }

  @Post("/sign-in")
  async signIn(@Body() signInDto: signInDto) {
    return await this.connection.transaction((transactionManager) => {
      return this.customerService.signIn(transactionManager, signInDto);
    });
  }
}
