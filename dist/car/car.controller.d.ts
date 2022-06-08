import { Connection } from "typeorm";
import { CarService } from "./car.service";
import { CarDto } from "./dto/car.dto";
import { RentCarDto } from "./dto/rentcar.dto";
export declare class CarController {
    private connection;
    private carService;
    constructor(connection: Connection, carService: CarService);
    getAll(): Promise<{
        statusCode: number;
        data: import("./car.entity").Car[];
    }>;
    createCar(createCarDto: CarDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    getCar(id: number): Promise<{
        statusCode: number;
        data: import("./car.entity").Car;
    }>;
    updateCar(id: number, updateCarDto: CarDto): Promise<{
        statusCode: number;
        message: string;
    }>;
    deleteCar(id: number): Promise<{
        statusCode: number;
        message: string;
    }>;
    rentCar(id: number, rentCarDto: RentCarDto): Promise<{
        statusCode: number;
        message: string;
    }>;
}
