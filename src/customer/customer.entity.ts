/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import * as bcrypt from "bcrypt";
import { ApiProperty, ApiHideProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { isBoolean, IsBoolean, IsDate } from "class-validator";
import { User } from "src/user/user.entity";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

@Entity({ name: "users", schema: "vehicle" })
export class Customer extends BaseEntity {
  // constructor(partial: Partial<Customer>) {
  //   super();
  //   Object.assign(this, partial);
  // }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  // @ApiProperty()
  @Column()
  full_name: string;

  @ApiHideProperty()
  @Column()
  @Exclude()
  user_name: string;

  @ApiHideProperty()
  @Column()
  @Exclude()
  email: string;

  @ApiHideProperty()
  @Column()
  password: string;

  @ApiHideProperty()
  @Column()
  created_at: Date;

  @ApiHideProperty()
  @Column()
  updated_at: Date;

  @ApiHideProperty()
  @Column({
    enum: UserRole,
    default: UserRole.USER
  })
  role: UserRole;
}
