import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import { Doctor } from "../entities/Doctor";
import { User } from "../entities/User";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { UserRole } from "../enums/UserRole";
import { getAppointmentsByDay, getAppointmentsByStatus, getTodayAppointments, getUpcomingAppointments } from "../utils/dashboard.utils";
import { getDateRanges } from "../utils/date.utils";

const userRepository = AppDataSource.getRepository(User)
const doctorRepository = AppDataSource.getRepository(Doctor)
const appointmentRepository = AppDataSource.getRepository(Appointment)

export const dashboardStats = async (userId: string, role: UserRole) => {

    const { startOfDay, endOfDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek } = getDateRanges()

    const [totalUsers, totalDoctors, appointments] = await Promise.all([
        userRepository.count(),
        doctorRepository.count(),
        appointmentRepository.find({
            relations: ["user", "doctor"]
        })
    ])

    return {
        totals: {
            users: totalUsers,
            doctors: totalDoctors,
            appointments: appointments.length
        },
        byStatus: getAppointmentsByStatus(appointments),
        byDay: getAppointmentsByDay(appointments, startOfMonth, endOfMonth),
        today: getTodayAppointments(appointments, startOfDay, endOfDay),
        upcoming: getUpcomingAppointments(appointments, startOfWeek, endOfWeek)
    }

}