import { ApiProperty } from "@nestjs/swagger";

export class CarDto {
  @ApiProperty({ type: String, description: "nplate" })
  nplate: string;

  @ApiProperty({ type: String, description: "vin" })
  vin: string;

  @ApiProperty({ type: String, description: "min" })
  min: string;

  @ApiProperty({ type: String, description: "informalnumber" })
  informalnumber: string;

  @ApiProperty({ type: Number, description: "yearofmanufactor" })
  yearofmanufacture: number;

  @ApiProperty({ type: Date, description: "inspectiondate" })
  inspectiondate: Date;

  @ApiProperty({ type: String, description: "type" })
  type: string;

  @ApiProperty({ type: String, description: "note" })
  note: string;

  @ApiProperty({ type: String, description: "isrented", default: false })
  isrented: string;
}
