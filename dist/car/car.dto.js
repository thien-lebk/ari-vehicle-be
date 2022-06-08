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
    swagger_1.ApiProperty({ type: String, description: "bien_kiem_soat" }),
    __metadata("design:type", String)
], CarDto.prototype, "bien_kiem_soat", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "so_khung" }),
    __metadata("design:type", String)
], CarDto.prototype, "so_khung", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "so_may" }),
    __metadata("design:type", String)
], CarDto.prototype, "so_may", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "ca_vet_so" }),
    __metadata("design:type", String)
], CarDto.prototype, "ca_vet_so", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: "nam_san_xuat" }),
    __metadata("design:type", Number)
], CarDto.prototype, "nam_san_xuat", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "ngay_kiem_dinh" }),
    __metadata("design:type", Date)
], CarDto.prototype, "ngay_kiem_dinh", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "chung_loai" }),
    __metadata("design:type", String)
], CarDto.prototype, "chung_loai", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "ghi_chu" }),
    __metadata("design:type", String)
], CarDto.prototype, "ghi_chu", void 0);
exports.CarDto = CarDto;
//# sourceMappingURL=car.dto.js.map