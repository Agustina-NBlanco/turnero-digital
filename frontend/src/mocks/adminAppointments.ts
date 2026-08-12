import { appointmentStatus } from "@/types/enums/appointmentStatus";
import { Appointment } from "@/types/models/appointment";

export const appointments: Appointment[] = [
    {
        id: "1",
        user: {
            id: "user-1",
            name: "María González"
        },
        doctor: {
            id: "doctor-1",
            name: "Dr. Juan Pérez",
            specialty: "Consulta general"
        },
        date: "2026-06-26",
        time: "09:00",
        status: appointmentStatus.CONFIRMED
    },
    {
        id: "2",
        user: {
            id: "user-2",
            name: "Juan López"
        },
        doctor: {
            id: "doctor-2",
            name: "Dra. Ana García",
            specialty: "Cardiología"
        },
        date: "2026-06-26",
        time: "10:00",
        status: appointmentStatus.PENDING
    },
    {
        id: "3",
        user: {
            id: "user-3",
            name: "Laura Rodríguez"
        },
        doctor: {
            id: "doctor-2",
            name: "Dra. Ana García",
            specialty: "Traumatología"
        },
        date: "2026-06-26",
        time: "11:00",
        status: appointmentStatus.CANCELLED
    },
    {
        id: "4",
        user: {
            id: "user-4",
            name: "Pedro Rodríguez"
        },
        doctor: {
            id: "doctor-3",
            name: "Dr. Martín López",
            specialty: "Pediatría"
        },
        date: "2026-06-26",
        time: "12:00",
        status: appointmentStatus.CONFIRMED
    },
    {
        id: "5",
        user: {
            id: "user-5",
            name: "María López"
        },
        doctor: {
            id: "doctor-3",
            name: "Dr. Martín López",
            specialty: "Consulta general"
        },
        date: "2026-06-26",
        time: "13:00",
        status: appointmentStatus.COMPLETED
    }
]