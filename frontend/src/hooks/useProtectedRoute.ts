"use client"

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { userRole, UserRole } from "@/types/enums/userRole";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export function useProtectedRoute(allowedRoles: UserRole[]) {
    const router = useRouter()

    const { data: user, isLoading, isError } = useCurrentUser()

    useEffect(() => {
        if (isLoading) return;

        if (isError || !user) {
            router.replace("/login")
            return
        }

        if (!allowedRoles.includes(user.role)) {
            router.replace(
                user.role === userRole.Admin ? "/admin/dashboard" : "/patient/dashboard"
            )
        }
    }, [user, isLoading, isError, allowedRoles, router])



    return {
        user,
        isLoading,
        isAuthorized: !!user && allowedRoles.includes(user.role),
    }
}