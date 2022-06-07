import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  Post,
  UnauthorizedException,
} from "@nestjs/common";
import { EntityManager } from "typeorm";
import { Customer } from "./customer.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcryptjs";
import { signInDto } from "./dto/signin-user.dto";
import { ApiFeature } from "src/utils/apiFeatures.utils";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class CustomerService {

  constructor(
    private jwtService: JwtService
  ) {

  }

  async getAll(transactionManager: EntityManager) {
    const users = await transactionManager.getRepository(Customer).find();

    // Transaction will roll back when throw exception
    if (!users) {
      throw new NotFoundException("No data");
    }

    return { statusCode: 200, data: users };
  }

  async createUser(
    transactionManager: EntityManager,
    createUserDto: CreateUserDto
  ) {
    const { full_name, user_name, email, password, created_at, updated_at } =
      createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = transactionManager.create(Customer, {
      full_name,
      user_name,
      email,
      password: hashedPassword,
      created_at,
      updated_at,
    });

    try {
      await transactionManager.save(newUser);
      console.log(newUser);
    } catch (error) {
      console.log(error);
      Logger.error(error);

      // Transaction will roll back when throw exception
      throw new InternalServerErrorException("Error when create user.");
    }

    return { statusCode: 201, message: "Create user successfully." };
  }

  async signIn(transactionManager: EntityManager, signInDto: signInDto) {
    const { user_name, password } = signInDto;

    // console.log(user_name, password)

    const user = await transactionManager.findOne(Customer, { user_name });

    if (!user) {
      throw new UnauthorizedException("Invalid Email Address");
    }

    // console.log(user.password)

    const isPasswordMatched = await bcrypt.compare(password, user.password)

    if (!isPasswordMatched) {
      throw new UnauthorizedException("Invalid password")
    } 
    
    const token = await ApiFeature.assignJwtToken(user.id.toString() , this.jwtService)

    return {token};
  }
}
