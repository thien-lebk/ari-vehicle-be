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
exports.Customer = exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../user/user.entity");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let Customer = class Customer extends typeorm_1.BaseEntity {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Customer.prototype, "full_name", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], Customer.prototype, "user_name", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Customer.prototype, "password", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Customer.prototype, "created_at", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Customer.prototype, "updated_at", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column({
        enum: UserRole,
        default: UserRole.USER
    }),
    __metadata("design:type", String)
], Customer.prototype, "role", void 0);
Customer = __decorate([
    typeorm_1.Entity({ name: "users", schema: "vehicle" })
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map