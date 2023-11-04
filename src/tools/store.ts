import { Task } from "./types"

export let tokenAccess = localStorage.getItem("tokenAccess") || ""
export let tokenRefresh = localStorage.getItem("tokenRefresh") || ""

export const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]")

export const setLocalStorage = (array: Task[]) => {
    return localStorage.setItem("tasks", JSON.stringify(array))
}

export const setTasks = () => {
    return localStorage.setItem("tasks", JSON.stringify(tasks))
}