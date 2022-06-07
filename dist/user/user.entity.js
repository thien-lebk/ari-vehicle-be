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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let User = class User extends typeorm_1.BaseEntity {
    constructor(partial) {
        super();
        Object.assign(this, partial);
    }
    async validatePassword(pass) {
        const hash = await bcrypt.hash(pass, this.salt);
        return hash === this.password;
    }
    async validateEmail(email) {
        return email === this.email;
    }
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], User.prototype, "is_deleted", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: "timestamp without time zone",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: "timestamp without time zone",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    __metadata("design:type", String)
], User.prototype, "staff_id", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", String)
], User.prototype, "is_first_login", void 0);
__decorate([
    swagger_1.ApiHideProperty(),
    __metadata("design:type", Date)
], User.prototype, "start_date", void 0);
User = __decorate([
    typeorm_1.Entity("public.user"),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map