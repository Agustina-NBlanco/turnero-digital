import { env } from "@/config/env";
import axios from "axios";


const api = axios.create({
    baseURL: env.apiUrl,
    timeout: 10000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.response.use(response => response, async error => {
    const originalRequest = error.config

    if (
        error.response?.status === 401 &&
        !originalRequest.url?.includes("/auth/login") &&
        !originalRequest.url?.includes("/auth/refresh")
    ) {

        if (originalRequest._retry) {
            return Promise.reject(error)
        }

        originalRequest._retry = true


        try {
            await api.post("/auth/refresh")

            return api(originalRequest)
        } catch {
            return Promise.reject(error)
        }
    }

    return Promise.reject(error)
})

export default api