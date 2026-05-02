import { Request, Response } from "express";
import { getAppointments as getAppointmentsService } from "../services/appointments.service";
import { getAppointmentById as getAppointmentByIdService } from "../services/appointments.service";


export const getAppointments = async (req: Request, res: Response) => {
    return res.json(await getAppointmentsService())
}

export const getAppointmentById = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params
    return res.json(await getAppointmentByIdService(id))
}