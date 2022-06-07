import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ type: String, description: "email" })
  // @IsString()
  // @IsNotEmpty()
  full_name: string;

  @ApiProperty({ type: String, description: "note" })
  // @IsString()
  // @IsNotEmpty()
  user_name: string;

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
}
