"use client"

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser"
import { userRole } from "@/types/enums/userRole"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function usePublicRoute() {
    const router = useRouter()

    const { data: user, isLoading } = useCurrentUser()

    useEffect(() => {
        if (isLoading) return;

        if (!user) return

        router.replace(
            user.role === userRole.Admin ? "/admin/dashboard" : "/patient/dashboard"
        )
    }, [user, isLoading, router])

    return {
        isLoading,
        canRender: !isLoading && !user,
    }
}