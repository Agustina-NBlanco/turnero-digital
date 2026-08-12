import { AppointmentStatus } from "@/types/enums/appointmentStatus";


export interface UpdateAppointmentDto {
    date?: string;
    time?: string;
    status?: AppointmentStatus
}