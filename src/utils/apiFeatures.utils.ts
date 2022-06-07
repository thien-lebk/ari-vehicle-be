import { JwtService } from "@nestjs/jwt";

export class ApiFeature {
  static async assignJwtToken(
    userID: string,
    jwtService: JwtService
  ): Promise<string> {
    const payLoad = { id: userID };
    const token = await jwtService.sign(payLoad);

    return token;
  }
}
