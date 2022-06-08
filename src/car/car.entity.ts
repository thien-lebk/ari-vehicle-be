import { ApiProperty, ApiHideProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "cars", schema: "vehicle" })
export class Car extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  //   @ApiHideProperty()
  @Column()
  nplate: string;

  @ApiHideProperty()
  @Column()
  vin: string;

  @ApiHideProperty()
  @Column()
  min: string;

  @ApiHideProperty()
  @Column()
  informalnumber: string;

  @ApiHideProperty()
  @Column()
  yearofmanufacture: number;

  @ApiHideProperty()
  @Column()
  inspectiondate: Date;

  @ApiHideProperty()
  @Column()
  type: string;

  @ApiHideProperty()
  @Column()
  note: string;

  @ApiHideProperty()
  @Column()
  isrented: string;
}
