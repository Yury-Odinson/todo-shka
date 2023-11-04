import { Link } from "react-router-dom";
import { AuthUser, NewTokens } from "./types";

const userAuthURL = "https://studapi.teachmeskills.by/auth/jwt/create/"

export let tokenRefresh = localStorage.getItem("tokenRefresh") || ""
export let tokenAccess = localStorage.getItem("tokenAccess") || ""

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
    localStorage.setItem("access", access)
    localStorage.setItem("refresh", refresh)
}
