import { AuthUser, NewTokens } from "./types";

const userAuthURL = "https://studapi.teachmeskills.by/auth/jwt/create/"
const userRefreshToken = "https://studapi.teachmeskills.by//auth/jwt/refresh/"


// get user tokens
export const authUser = async (user: AuthUser) => {
    const authURL = new URL(userAuthURL)
    const response = await fetch(authURL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    return await response.json()
}

// save tokens in the localStorage
export const saveTokens = ({ access, refresh }: NewTokens) => {
    localStorage.setItem("tokenAccess", access)
    localStorage.setItem("tokenRefresh", refresh)
}

export const checkToken = async (refresh: string) => {
    const refreshURL = new URL(userRefreshToken)
    const response = await fetch(refreshURL, {
        method: "POST",
        body: JSON.stringify(new Object({ "refresh": refresh })),
        headers: { "Content-Type": "application/json" }
    })
    const newToken = await response.json()
    return localStorage.setItem("tokenAccess", newToken.access)
}
