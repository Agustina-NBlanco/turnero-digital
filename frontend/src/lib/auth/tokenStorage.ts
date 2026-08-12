import { LoginResponse } from "@/features/auth/types/auth";


const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const isBrowser = () => typeof window !== "undefined"

export const tokenStorage = {
    saveTokens(tokens: LoginResponse) {
        if (!isBrowser()) return

        localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken)
        localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken)
    },

    getAccessToken() {
        if (!isBrowser()) return null

        return localStorage.getItem(ACCESS_TOKEN_KEY)
    },

    getRefreshToken() {
        if (!isBrowser()) return null

        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    removeTokens() {
        if (!isBrowser()) return

        localStorage.removeItem(ACCESS_TOKEN_KEY)
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }
}