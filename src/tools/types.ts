export type AuthUser = {
    email: string,
    password: string
}

export type NewTokens = {
    access: string,
    refresh: string
}

export type Task = {
    name: string,
    description: string,
    date: string,
    completed: boolean
}
