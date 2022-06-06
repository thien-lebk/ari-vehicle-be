import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class CustomerService {
  async getAll(transactionManager: EntityManager) {
    const users = await transactionManager.getRepository(Customer).find();

    // Transaction will roll back when throw exception
    if (!users) {
      throw new NotFoundException('No data');
    }

    return { statusCode: 200, data: users };
  }

  async createUser(
    transactionManager: EntityManager,
    createUserDto: CreateUserDto,
  ) {
    const { email, password } = createUserDto;
    const newUser = transactionManager.create(Customer, { email, password });

    try {
      await transactionManager.save(newUser);
    } catch (error) {
      Logger.error(error);

      // Transaction will roll back when throw exception
      throw new InternalServerErrorException('Error when create user.');
    }

    return { statusCode: 201, message: 'Create user successfully.' };
  }
}
