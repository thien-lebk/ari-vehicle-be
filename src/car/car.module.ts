import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarController } from "./car.controller";
import { Car } from "./car.entity";
import { CarService } from "./car.service";
import { RentCar } from "./rentcar.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Car, RentCar])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
