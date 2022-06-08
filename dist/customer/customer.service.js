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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const customer_entity_1 = require("./customer.entity");
const bcrypt = require("bcryptjs");
const apiFeatures_utils_1 = require("../utils/apiFeatures.utils");
const jwt_1 = require("@nestjs/jwt");
let CustomerService = class CustomerService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async getAll(transactionManager) {
        const users = await transactionManager.getRepository(customer_entity_1.Customer).find();
        if (!users) {
            throw new common_1.NotFoundException("No data");
        }
        return { statusCode: 200, data: users };
    }
    async createUser(transactionManager, createUserDto) {
        const { name, username, email, password, created_at, updated_at, role, team, } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = transactionManager.create(customer_entity_1.Customer, {
            name,
            username,
            email,
            password: hashedPassword,
            created_at,
            updated_at,
            role,
            team,
        });
        try {
            await transactionManager.save(newUser);
            console.log(newUser);
        }
        catch (error) {
            console.log(error);
            common_1.Logger.error(error);
            throw new common_1.InternalServerErrorException("Error when create user.");
        }
        return { statusCode: 200, message: "Create user successfully." };
    }
    async signIn(transactionManager, signInDto) {
        const { username, password } = signInDto;
        const user = await transactionManager.findOne(customer_entity_1.Customer, { username });
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid Email Address");
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException("Invalid password");
        }
        const token = await apiFeatures_utils_1.ApiFeature.assignJwtToken(user.id.toString(), this.jwtService);
        let data = {};
        data["token"] = token;
        data["user"] = user;
        return data;
    }
};
CustomerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map