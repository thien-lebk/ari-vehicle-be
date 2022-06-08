import { BaseEntity } from "typeorm";
export declare class RentCar extends BaseEntity {
    id: number;
    carid: number;
    rentdate: Date;
    returndate: Date;
    driver: string;
    bod: Boolean;
    bodreviewdate: Date;
    bodteam: Boolean;
    bodteamreviewdate: Date;
    proposer: number;
    destination: string;
    reason: string;
    fuel: Number;
    realreturndate: Date;
    note: String;
}
