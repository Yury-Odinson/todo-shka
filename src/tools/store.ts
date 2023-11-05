import React from "react"
import { ContextTasks, Task } from "./types"

export let tokenAccess = localStorage.getItem("tokenAccess") || ""
export let tokenRefresh = localStorage.getItem("tokenRefresh") || ""

// export const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]")

export const TaskContext = React.createContext<ContextTasks>({
    tasks: [],
    setTasks: () => { }
})

export const setLocalStorage = (task: Task[]) => {
    return localStorage.setItem("tasks", JSON.stringify(task))
}
