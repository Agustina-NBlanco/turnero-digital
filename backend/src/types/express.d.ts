import { JwtPayload } from "./jwtpaiload";

declare global {
    namespace Express {
        interface Request {
        user?: JwtPayload
        }
    }
}