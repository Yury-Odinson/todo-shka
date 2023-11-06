import { Dispatch, SetStateAction } from "react"

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
    time: string,
    completed: boolean,
    id: string
}

export type ContextTasks = {
    tasks: Task[],
    setTasks: Dispatch<SetStateAction<Task[]>>
}

export type NewTaskProps = {
    isOpen: any
}
