import { useContext, useState } from "react"
import { TaskContext, setLocalStorage } from "../tools/store"

export const NewTask = () => {

    const [inputName, setInputName] = useState("")
    const [inputDescription, setInputDescription] = useState("")
    const [inputDate, setInputDate] = useState("")
    const [inputTime, setInputTime] = useState("")

    const { tasks } = useContext(TaskContext)
    const { setTasks } = useContext(TaskContext)

    const addTask = () => {
        const date = Date.now().toString()
        const task = { name: inputName, description: inputDescription, date: inputDate, time: inputTime, completed: false, id: date }
        tasks.push(task)
        setTasks([...tasks])
        setLocalStorage(tasks)
    }

    return (
        <>
            <div className="new-task-background" />
            <div className="new-task">
                <label>
                    <input type="text" placeholder="input name of the task" onChange={(e) => setInputName(e.target.value)} />
                </label>
                <label>
                    <input type="text" placeholder="input description of the task" onChange={(e) => setInputDescription(e.target.value)} />
                </label>
                <label>
                    <input type="date" onChange={(e) => setInputDate(e.target.value)} />
                </label>
                <label>
                    <input type="time" onChange={(e) => setInputTime(e.target.value)} />
                </label>
                <button onClick={() => {
                    addTask()
                }}>add task</button>
            </div>
        </>
    )
}
