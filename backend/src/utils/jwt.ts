import jwt from "jsonwebtoken"
import { JwtPayload } from "../types/jwtpaiload"


const JWT_SECRET = process.env.JWT_SECRET || "secret"

export const generateToken = (payload: object) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })
}

export const verifyToken = (token: string): JwtPayload => {
    return jwt.verify(token, JWT_SECRET) as JwtPayload
}