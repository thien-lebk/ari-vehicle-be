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
import { isBoolean, IsBoolean } from "class-validator";

@Entity("public.user")
export class User extends BaseEntity {
  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

//   @ApiProperty()
//   @Column()
//   uuid: string;

  @ApiProperty()
  @Column()
  username: string;

  @ApiHideProperty()
  @Column()
  @Exclude()
  email: string;

  @ApiHideProperty()
  @Column()
  @Exclude()
  password: string;

  @ApiHideProperty()
  @Column()
  salt: string;

  @IsBoolean()
  is_active: boolean;

  @IsBoolean()
  is_deleted: boolean;

  @ApiProperty()
  @Column({
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date;

  @ApiProperty()
  @Column({
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  updated_at: Date;

  @ApiHideProperty()
  staff_id: string;

  @ApiHideProperty()
  @IsBoolean()
  is_first_login: string;

  @ApiHideProperty()
  start_date: Date;

  async validatePassword(pass: string): Promise<boolean> {
    const hash = await bcrypt.hash(pass, this.salt);
    return hash === this.password;
  }

  async validateEmail(email: string): Promise<boolean> {
    return email === this.email;
  }
}
