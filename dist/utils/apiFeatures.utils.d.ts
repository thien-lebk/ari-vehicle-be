import { JwtService } from "@nestjs/jwt";
export declare class ApiFeature {
    static assignJwtToken(userID: string, jwtService: JwtService): Promise<string>;
}
