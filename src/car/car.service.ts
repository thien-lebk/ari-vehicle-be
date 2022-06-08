import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { EntityManager } from "typeorm";
import { Car } from "./car.entity";
import { CarDto } from "./dto/car.dto";
import { RentCarDto } from "./dto/rentcar.dto";
import { RentCar } from "./rentcar.entity";

@Injectable()
export class CarService {
  async getAll(transactionManager: EntityManager) {
    const cars = await transactionManager.getRepository(Car).find();

    if (!cars) {
      throw new NotFoundException("No cars");
    }

    return { statusCode: 200, data: cars };
  }

  async createCars(transactionManager: EntityManager, createCar: CarDto) {
    const {
      nplate,
      vin,
      min,
      informalnumber,
      yearofmanufacture,
      inspectiondate,
      type,
      note,
    } = createCar;

    const newCar = transactionManager.create(Car, {
      nplate,
      vin,
      min,
      informalnumber,
      yearofmanufacture,
      inspectiondate,
      type,
      note,
    });

    try {
      await transactionManager.save(newCar);
      console.log(newCar);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("Error when create car.");
    }

    return { statusCode: 200, message: "Create car successfully." };
  }

  async getCar(transactionManager: EntityManager, id: number) {
    const car = await transactionManager.getRepository(Car).findOne(id);
    if (!car) {
      throw new NotFoundException("No cars");
    }
    return { statusCode: 200, data: car };
  }

  async updateCar(
    transactionManager: EntityManager,
    id: number,
    updateCar: CarDto
  ) {
    const {
      nplate,
      vin,
      min,
      informalnumber,
      yearofmanufacture,
      inspectiondate,
      type,
      note,
      isrented,
    } = updateCar;

    try {
      transactionManager.update(
        Car,
        { id },
        {
          nplate,
          vin,
          min,
          informalnumber,
          yearofmanufacture,
          inspectiondate,
          type,
          note,
          isrented,
        }
      );
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("Error when update car.");
    }

    return { statusCode: 200, message: "Update car successfully." };
  }

  async deleteCar(transactionManager: EntityManager, id: number) {
    const car = transactionManager.findOne(Car, id);
    if (!car) {
      throw new NotFoundException("No car");
    }
    try {
      transactionManager.delete(Car, id);
      return { statusCode: 200, message: "Delete car successfully." };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("Error when delete car.");
    }
  }

  async rentCar(transactionManager: EntityManager, id: number, rentCarDto: RentCarDto) {
    const car = await transactionManager.getRepository(Car).findOne(id);
    if (!car) {
      throw new NotFoundException("No cars");
    }

    const {
      rentdate,
      returndate,
      driver,
      bodreviewdate,
      bodteamreviewdate,
      proposer,
      destination,
      reason,
      fuel,
      realreturndate,
      note
    } = rentCarDto;

    const newCar = transactionManager.create(RentCar, {
      carid: id,
      rentdate,
      returndate,
      driver,
      bodreviewdate,
      bodteamreviewdate,
      proposer,
      destination,
      reason,
      fuel,
      realreturndate,
      note,
    });

    try {
      await transactionManager.save(newCar);
      console.log(newCar);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException("Error when create request.");
    }

    return { statusCode: 200, message: "Create request successfully." };
  }
}
