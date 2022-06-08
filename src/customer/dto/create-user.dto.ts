import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export enum UserRole {
  MANAGER = "manager",
  LEADER = "leader",
  STAFF = "STAFF",
}

export class CreateUserDto {
  @ApiProperty({ type: String, description: "email" })
  // @IsString()
  // @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, description: "note" })
  // @IsString()
  // @IsNotEmpty()
  username: string;

  @ApiProperty({ type: String, description: "phone_number" })
  // @IsString()
  // @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, description: "password" })
  // @IsString()
  // @IsNotEmpty()
  password: string;

  @ApiProperty({ type: Date, description: "created_at" })
  created_at: Date = new Date(Date.now());

  @ApiProperty({ type: Date, description: "updated_at" })
  updated_at: Date = new Date(Date.now());

  @ApiProperty({ type: Number, description: "role", default: 3 })
  role: number;

  @ApiProperty({ type: Number, description: "team" })
  team: number;
}
