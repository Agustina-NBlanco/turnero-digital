import { useQuery } from "@tanstack/react-query";
import { authService } from "../api/auth.service";


export function useCurrentUser() {
    return useQuery({
        queryKey: ["currentUser"],
        queryFn: async () => {
            const session = await authService.getSession()
            return session.user
        },
        retry: false
    })
}