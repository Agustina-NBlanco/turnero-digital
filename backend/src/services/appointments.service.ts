import { AppDataSource } from "../config/data-source"
import { Appointment } from "../entities/Appointment"

const appointmentRepository = AppDataSource.getRepository(Appointment)

export const getAppointments = async () => {
    return appointmentRepository.find()
}

export const getAppointmentById = async (id: string) => {
    return appointmentRepository.findOneBy({ id })
}