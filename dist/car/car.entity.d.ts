import { BaseEntity } from "typeorm";
export declare class Car extends BaseEntity {
    id: number;
    nplate: string;
    vin: string;
    min: string;
    informalnumber: string;
    yearofmanufacture: number;
    inspectiondate: Date;
    type: string;
    note: string;
    isrented: string;
}
