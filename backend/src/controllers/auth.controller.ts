import { Request, Response } from "express";
import {
    register as registerService,
    login as loginService

} from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
    const user = await registerService(req.body)
    return res.status(201).json(user)
}

export const login = async (req: Request, res: Response) => {
    const data = await loginService(req.body)
    return res.status(200).json(data)
}