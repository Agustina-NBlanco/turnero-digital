
export const buildAppointmentDateTime = (date: Date, time: string) => {
    const result = new Date(date)
    const [h, m] = time.split(":")
    result.setHours(Number(h), Number(m), 0, 0)
    return result
}

export const getDayOfWeek = (date: string): number => {
    const [year, month, day] = date.split("-").map(Number) as [number, number, number]

    return new Date(year, month - 1, day).getDay()
}

export const getDateRanges = () => {
    const now = new Date()

    const startOfDay = new Date(now)
    startOfDay.setHours(0, 0, 0, 0)

    const endOfDay = new Date(now)
    endOfDay.setHours(23, 59, 59, 999)

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    endOfMonth.setHours(23, 59, 59, 999)

    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - now.getDay())
    startOfWeek.setHours(0, 0, 0, 0)

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(startOfWeek.getDate() + 6)
    endOfWeek.setHours(23, 59, 59, 999)

    return {
        startOfDay,
        endOfDay,
        startOfMonth,
        endOfMonth,
        startOfWeek,
        endOfWeek
    }
}