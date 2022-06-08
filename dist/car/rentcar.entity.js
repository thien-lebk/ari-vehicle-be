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
exports.RentCar = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let RentCar = class RentCar extends typeorm_1.BaseEntity {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RentCar.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RentCar.prototype, "carid", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RentCar.prototype, "rentdate", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RentCar.prototype, "returndate", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RentCar.prototype, "driver", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], RentCar.prototype, "bod", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RentCar.prototype, "bodreviewdate", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], RentCar.prototype, "bodteam", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RentCar.prototype, "bodteamreviewdate", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RentCar.prototype, "proposer", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RentCar.prototype, "destination", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RentCar.prototype, "reason", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], RentCar.prototype, "fuel", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], RentCar.prototype, "realreturndate", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], RentCar.prototype, "note", void 0);
RentCar = __decorate([
    typeorm_1.Entity({ name: "rentinfo", schema: "vehicle" })
], RentCar);
exports.RentCar = RentCar;
//# sourceMappingURL=rentcar.entity.js.map