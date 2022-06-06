import { Body, Controller, Get, Post } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CustomerService } from './customer.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('customer')
export class CustomerController {
  constructor(
    private connection: Connection,
    private customerService: CustomerService,
  ) {}

  @Get('/sign-in')
  signIn() {
    return { code: 200, message: 'Login successfull.', version: 1.1 };
  }

  // Demo transaction
  @Get()
  async getAll() {
    return await this.connection.transaction((transactionManager) => {
      return this.customerService.getAll(transactionManager);
    });
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.connection.transaction((transactionManager) => {
      return this.customerService.createUser(transactionManager, createUserDto);
    });
  }
}
