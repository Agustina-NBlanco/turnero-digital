import { Request, Response } from "express";
import { getUsers as getUsersService } from "../services/user.service"
import { getUserById as getUserByIdService } from "../services/user.service";



export const getUsers = async (req: Request, res: Response) => {
    return res.json(await getUsersService())
}

export const getUserById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params
    
    return res.json(await getUserByIdService(id))
}
