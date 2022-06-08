"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const car_service_1 = require("./car.service");
const car_dto_1 = require("./dto/car.dto");
const rentcar_dto_1 = require("./dto/rentcar.dto");
let CarController = class CarController {
    constructor(connection, carService) {
        this.connection = connection;
        this.carService = carService;
    }
    async getAll() {
        return await this.connection.transaction((transactionManager) => {
            return this.carService.getAll(transactionManager);
        });
    }
    async createCar(createCarDto) {
        return await this.connection.transaction((transactionManager) => {
            return this.carService.createCars(transactionManager, createCarDto);
        });
    }
    async getCar(id) {
        return await this.connection.transaction((transactionManager) => {
            return this.carService.getCar(transactionManager, id);
        });
    }
    async updateCar(id, updateCarDto) {
        return await this.connection.transaction((transactionManager) => {
            return this.carService.updateCar(transactionManager, id, updateCarDto);
        });
    }
    async deleteCar(id) {
        return await this.connection.transaction((transactionManager) => {
            return this.carService.deleteCar(transactionManager, id);
        });
    }
    async rentCar(id, rentCarDto) {
        return await this.connection.transaction((transactionManager) => {
            return this.carService.rentCar(transactionManager, id, rentCarDto);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "getAll", null);
__decorate([
    common_1.Post("/create"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.CarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "createCar", null);
__decorate([
    common_1.Get("/update/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "getCar", null);
__decorate([
    common_1.Post("/update/:id"),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, car_dto_1.CarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "updateCar", null);
__decorate([
    common_1.Delete("/delete/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "deleteCar", null);
__decorate([
    common_1.Post("/rent/:id"),
    __param(0, common_1.Param("id")), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, rentcar_dto_1.RentCarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "rentCar", null);
CarController = __decorate([
    common_1.Controller("car"),
    __metadata("design:paramtypes", [typeorm_1.Connection, car_service_1.CarService])
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=car.controller.js.map