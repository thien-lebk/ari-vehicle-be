"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDemoRepository = void 0;
const typeorm_1 = require("typeorm");
const transaction_demo_entity_1 = require("./transaction-demo.entity");
let TransactionDemoRepository = class TransactionDemoRepository extends typeorm_1.Repository {
    async getDemoFunction(id) {
        try {
            const query = this.createQueryBuilder('demo');
            query.select(['demo.id', 'demo.action'])
                .where('demo.id = :id', { id })
                .orderBy('demo.created_at', "DESC");
            const data = await query.getOne();
            return { code: 200, data: data ? data : null };
        }
        catch (error) {
            console.log(error);
            return { code: 201, message: "Error" };
        }
    }
    async postDemoFunction(createDemoDto) {
        const connection = typeorm_1.getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const { demo_name, action, updated_by_user_id, testArr } = createDemoDto;
            let createDemo = this.create({
                demo_name: demo_name,
                action: action,
                updated_by_user_id: updated_by_user_id,
                created_at: new Date()
            });
            await queryRunner.manager.save(createDemoDto);
            await queryRunner.commitTransaction();
            return { code: 200, message: "Created successfully." };
        }
        catch (error) {
            console.log(error);
            await queryRunner.rollbackTransaction();
            return { code: 201, message: "Error" };
        }
        finally {
            await queryRunner.release();
        }
    }
    async putDemoFunction(id, action) {
        try {
            const query = this.createQueryBuilder('demo');
            query.update()
                .set({ action: action })
                .where('id = :id', { id })
                .execute()
                .catch(error => {
                return ({ code: 201, message: "Error occurred when update . Please try again later." });
            });
            return ({ code: 200, data: "Update successfully" });
        }
        catch (error) {
            console.log(error);
            return { code: 201, message: "Error" };
        }
    }
    async deleteDemoFunction(id) {
        try {
            const query = this.createQueryBuilder('demo');
            query.delete()
                .from(transaction_demo_entity_1.TransactionDemoEntity)
                .where('id = :id', { id })
                .execute()
                .catch(error => {
                return ({ code: 201, message: "Error occurred when delete . Please try again later." });
            });
            return ({ code: 200, data: "Delete successfully" });
        }
        catch (error) {
            console.log(error);
            return { code: 201, message: "Error" };
        }
    }
    async testTransaction1(app_user_id, action, transactionalEntityManager) {
        await transactionalEntityManager.getRepository(transaction_demo_entity_1.TransactionDemoEntity)
            .createQueryBuilder('demo')
            .insert()
            .into(transaction_demo_entity_1.TransactionDemoEntity)
            .values({
            updated_by_user_id: app_user_id,
            action: action
        })
            .execute();
    }
};
TransactionDemoRepository = __decorate([
    typeorm_1.EntityRepository(transaction_demo_entity_1.TransactionDemoEntity)
], TransactionDemoRepository);
exports.TransactionDemoRepository = TransactionDemoRepository;
//# sourceMappingURL=transaction-demo.repository.js.map