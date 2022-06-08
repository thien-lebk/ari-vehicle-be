import { ApiProperty } from "@nestjs/swagger";

export class signInDto {
  @ApiProperty({ type: String, description: "username" })
  username: string;

  @ApiProperty({ type: String, description: "password" })
  password: string;
}
