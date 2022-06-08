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
exports.RentCarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RentCarDto {
}
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "rentdate" }),
    __metadata("design:type", Date)
], RentCarDto.prototype, "rentdate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "returndate" }),
    __metadata("design:type", Date)
], RentCarDto.prototype, "returndate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "driver" }),
    __metadata("design:type", String)
], RentCarDto.prototype, "driver", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "bodreviewdate" }),
    __metadata("design:type", Date)
], RentCarDto.prototype, "bodreviewdate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "bodteamreviewdate" }),
    __metadata("design:type", Date)
], RentCarDto.prototype, "bodteamreviewdate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: "proposer" }),
    __metadata("design:type", Number)
], RentCarDto.prototype, "proposer", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "destination" }),
    __metadata("design:type", String)
], RentCarDto.prototype, "destination", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "reason" }),
    __metadata("design:type", String)
], RentCarDto.prototype, "reason", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: "fuel" }),
    __metadata("design:type", Number)
], RentCarDto.prototype, "fuel", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "realreturndate" }),
    __metadata("design:type", Date)
], RentCarDto.prototype, "realreturndate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "note" }),
    __metadata("design:type", String)
], RentCarDto.prototype, "note", void 0);
exports.RentCarDto = RentCarDto;
//# sourceMappingURL=rentcar.dto.js.map