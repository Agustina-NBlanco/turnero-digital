import { Appointment } from "../entities/Appointment"
import { AppointmentStatus } from "../enums/AppointmentStatus"

export const getAppointmentsByStatus = (appointments: Appointment[]) => {
    return appointments.reduce((acc, appt) => {
        acc[appt.status]++
        return acc
    }, {
        confirmed: 0,
        pending: 0,
        cancelled: 0,
        completed: 0
    })
}

export const getAppointmentsByDay = (appointments: Appointment[], startOfMonth: Date, endOfMonth: Date) => {
    const byDayMap: Record<string, number> = {}

    appointments.forEach(appt => {
        const date = new Date(appt.date)

        if (date >= startOfMonth && date <= endOfMonth) {
            const key = date.toISOString().slice(0, 10)
            byDayMap[key] = (byDayMap[key] ?? 0) + 1
        }
    })

    return Object.entries(byDayMap)
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => a.date.localeCompare(b.date))
}

export const getTodayAppointments = (appointments: Appointment[], startOfDay: Date, endOfDay: Date) => {
    return appointments
        .filter(appt => {
            const date = new Date(appt.date)
            return date >= startOfDay && date <= endOfDay
        })
        .sort((a, b) => a.time.localeCompare(b.time))
}

export const getUpcomingAppointments = (appointments: Appointment[], startOfWeek: Date, endOfWeek: Date) => {
    return appointments
        .filter(appt => {
            const date = new Date(appt.date)

            return (
                date >= startOfWeek &&
                date <= endOfWeek &&
                appt.status !== AppointmentStatus.CANCELLED &&
                appt.status !== AppointmentStatus.COMPLETED
            )
        })
        .sort((a, b) => {
            if (a.date === b.date) return a.time.localeCompare(b.time)
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
}