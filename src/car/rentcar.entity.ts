import { ApiProperty, ApiHideProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "rentinfo", schema: "vehicle" })
export class RentCar extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  //   @ApiHideProperty()
  @Column()
  carid: number;

  @ApiHideProperty()
  @Column()
  rentdate: Date;

  @ApiHideProperty()
  @Column()
  returndate: Date;

  @ApiHideProperty()
  @Column()
  driver: string;

  @ApiHideProperty()
  @Column()
  bod: Boolean;

  @ApiHideProperty()
  @Column()
  bodreviewdate: Date;

  @ApiHideProperty()
  @Column()
  bodteam: Boolean;

  @ApiHideProperty()
  @Column()
  bodteamreviewdate: Date;

  @ApiHideProperty()
  @Column()
  proposer: number;

  @ApiHideProperty()
  @Column()
  destination: string;

  @ApiHideProperty()
  @Column()
  reason: string;

  @ApiHideProperty()
  @Column()
  fuel: Number;

  @ApiHideProperty()
  @Column()
  realreturndate: Date;

  @ApiHideProperty()
  @Column()
  note: String;
}
