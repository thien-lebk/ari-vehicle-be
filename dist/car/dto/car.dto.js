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
exports.CarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CarDto {
}
__decorate([
    swagger_1.ApiProperty({ type: String, description: "nplate" }),
    __metadata("design:type", String)
], CarDto.prototype, "nplate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "vin" }),
    __metadata("design:type", String)
], CarDto.prototype, "vin", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "min" }),
    __metadata("design:type", String)
], CarDto.prototype, "min", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "informalnumber" }),
    __metadata("design:type", String)
], CarDto.prototype, "informalnumber", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: "yearofmanufactor" }),
    __metadata("design:type", Number)
], CarDto.prototype, "yearofmanufacture", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "inspectiondate" }),
    __metadata("design:type", Date)
], CarDto.prototype, "inspectiondate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "type" }),
    __metadata("design:type", String)
], CarDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "note" }),
    __metadata("design:type", String)
], CarDto.prototype, "note", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "isrented", default: false }),
    __metadata("design:type", String)
], CarDto.prototype, "isrented", void 0);
exports.CarDto = CarDto;
//# sourceMappingURL=car.dto.js.map