import { EntityManager } from "typeorm";
import { Car } from "./car.entity";
import { CarDto } from "./dto/car.dto";
import { RentCarDto } from "./dto/rentcar.dto";
export declare class CarService {
    getAll(transactionManager: EntityManager): Promise<{
        statusCode: number;
        data: Car[];
    }>;
    createCars(transactionManager: EntityManager, createCar: CarDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    getCar(transactionManager: EntityManager, id: number): Promise<{
        statusCode: number;
        data: Car;
    }>;
    updateCar(transactionManager: EntityManager, id: number, updateCar: CarDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteCar(transactionManager: EntityManager, id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
    rentCar(transactionManager: EntityManager, id: number, rentCarDto: RentCarDto): Promise<{
        statusCode: number;
        message: string;
    }>;
}
