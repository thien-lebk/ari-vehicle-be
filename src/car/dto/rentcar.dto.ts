import { ApiProperty } from "@nestjs/swagger";

export class RentCarDto {
  @ApiProperty({ type: Date, description: "rentdate" })
  rentdate: Date;

  @ApiProperty({ type: Date, description: "returndate" })
  returndate: Date;

  @ApiProperty({ type: String, description: "driver" })
  driver: string;

  @ApiProperty({ type: Date, description: "bodreviewdate" })
  bodreviewdate: Date;

  @ApiProperty({ type: Date, description: "bodteamreviewdate" })
  bodteamreviewdate: Date;

  @ApiProperty({ type: Number, description: "proposer" })
  proposer: number;

  @ApiProperty({ type: String, description: "destination" })
  destination: string;

  @ApiProperty({ type: String, description: "reason" })
  reason: string;

  @ApiProperty({ type: Number, description: "fuel" })
  fuel: Number;

  @ApiProperty({ type: Date, description: "realreturndate" })
  realreturndate: Date;

  @ApiProperty({ type: String, description: "note" })
  note: string;
}
