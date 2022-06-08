import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { Connection, TransactionManager } from "typeorm";
import { CarService } from "./car.service";
import { CarDto } from "./dto/car.dto";
import { RentCarDto } from "./dto/rentcar.dto";

@Controller("car")
export class CarController {
  constructor(private connection: Connection, private carService: CarService) {}

  @Get()
  async getAll() {
    return await this.connection.transaction((transactionManager) => {
      return this.carService.getAll(transactionManager);
    });
  }

  @Post("/create")
  async createCar(@Body() createCarDto: CarDto) {
    return await this.connection.transaction((transactionManager) => {
      return this.carService.createCars(transactionManager, createCarDto);
    });
  }

  @Get("/update/:id")
  async getCar(@Param("id") id: number) {
    return await this.connection.transaction((transactionManager) => {
      return this.carService.getCar(transactionManager, id);
    });
  }

  @Post("/update/:id")
  async updateCar(@Param("id") id: number, @Body() updateCarDto: CarDto) {
    return await this.connection.transaction((transactionManager) => {
      return this.carService.updateCar(transactionManager, id, updateCarDto);
    });
  }

  @Delete("/delete/:id")
  async deleteCar(@Param("id") id: number) {
    return await this.connection.transaction((transactionManager) => {
      return this.carService.deleteCar(transactionManager, id);
    });
  }

  @Post("/rent/:id")
  async rentCar(@Param("id") id: number, @Body() rentCarDto: RentCarDto) {
    return await this.connection.transaction((transactionManager) => {
      return this.carService.rentCar(transactionManager, id, rentCarDto);
    });
  }
}
