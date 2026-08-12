import { useQuery } from "@tanstack/react-query";
import { appointmentService } from "../api/appointment.service";


export function useAppointments() {
    return useQuery({
        queryKey: ["appointments"],
        queryFn: appointmentService.getAllAppointments,
        refetchOnMount: "always"
    })
}