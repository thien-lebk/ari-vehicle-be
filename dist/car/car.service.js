"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const car_entity_1 = require("./car.entity");
const rentcar_entity_1 = require("./rentcar.entity");
let CarService = class CarService {
    async getAll(transactionManager) {
        const cars = await transactionManager.getRepository(car_entity_1.Car).find();
        if (!cars) {
            throw new common_1.NotFoundException("No cars");
        }
        return { statusCode: 200, data: cars };
    }
    async createCars(transactionManager, createCar) {
        const { nplate, vin, min, informalnumber, yearofmanufacture, inspectiondate, type, note, } = createCar;
        const newCar = transactionManager.create(car_entity_1.Car, {
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Error when create car.");
        }
        return { statusCode: 200, message: "Create car successfully." };
    }
    async getCar(transactionManager, id) {
        const car = await transactionManager.getRepository(car_entity_1.Car).findOne(id);
        if (!car) {
            throw new common_1.NotFoundException("No cars");
        }
        return { statusCode: 200, data: car };
    }
    async updateCar(transactionManager, id, updateCar) {
        const { nplate, vin, min, informalnumber, yearofmanufacture, inspectiondate, type, note, isrented, } = updateCar;
        try {
            transactionManager.update(car_entity_1.Car, { id }, {
                nplate,
                vin,
                min,
                informalnumber,
                yearofmanufacture,
                inspectiondate,
                type,
                note,
                isrented,
            });
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Error when update car.");
        }
        return { statusCode: 200, message: "Update car successfully." };
    }
    async deleteCar(transactionManager, id) {
        const car = transactionManager.findOne(car_entity_1.Car, id);
        if (!car) {
            throw new common_1.NotFoundException("No car");
        }
        try {
            transactionManager.delete(car_entity_1.Car, id);
            return { statusCode: 200, message: "Delete car successfully." };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Error when delete car.");
        }
    }
    async rentCar(transactionManager, id, rentCarDto) {
        const car = await transactionManager.getRepository(car_entity_1.Car).findOne(id);
        if (!car) {
            throw new common_1.NotFoundException("No cars");
        }
        const { rentdate, returndate, driver, bodreviewdate, bodteamreviewdate, proposer, destination, reason, fuel, realreturndate, note } = rentCarDto;
        const newCar = transactionManager.create(rentcar_entity_1.RentCar, {
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
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Error when create request.");
        }
        return { statusCode: 200, message: "Create request successfully." };
    }
};
CarService = __decorate([
    common_1.Injectable()
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map