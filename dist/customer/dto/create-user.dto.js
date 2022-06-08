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
exports.CreateUserDto = exports.UserRole = void 0;
const swagger_1 = require("@nestjs/swagger");
var UserRole;
(function (UserRole) {
    UserRole["MANAGER"] = "manager";
    UserRole["LEADER"] = "leader";
    UserRole["STAFF"] = "STAFF";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
class CreateUserDto {
    constructor() {
        this.created_at = new Date(Date.now());
        this.updated_at = new Date(Date.now());
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String, description: "email" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "note" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "phone_number" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: "password" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "created_at" }),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "created_at", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date, description: "updated_at" }),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "updated_at", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: "role", default: 3 }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number, description: "team" }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "team", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map