import { ApiProperty } from "@nestjs/swagger";

export class signInDto {
  @ApiProperty({ type: String, description: "user_name" })
  user_name: string;

  @ApiProperty({ type: String, description: "password" })
  password: string;
}
