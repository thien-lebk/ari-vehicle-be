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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Car = class Car extends typeorm_1.BaseEntity {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Car.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "nplate", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "vin", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "min", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "informalnumber", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Car.prototype, "yearofmanufacture", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Car.prototype, "inspectiondate", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "type", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "note", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Car.prototype, "isrented", void 0);
Car = __decorate([
    typeorm_1.Entity({ name: "cars", schema: "vehicle" })
], Car);
exports.Car = Car;
//# sourceMappingURL=car.entity.js.map