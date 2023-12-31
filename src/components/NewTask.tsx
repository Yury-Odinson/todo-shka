import { useContext, useState } from "react"
import { TaskContext, setLocalStorage } from "../tools/store"
import { NewTaskProps } from "../tools/types"

export const NewTask = ({ isOpen }: NewTaskProps) => {

    const [inputName, setInputName] = useState("")
    const [inputDescription, setInputDescription] = useState("")
    const [inputDate, setInputDate] = useState("")
    const [inputTime, setInputTime] = useState("")

    const { tasks } = useContext(TaskContext)
    const { setTasks } = useContext(TaskContext)

    const addTask = () => {
        const date = Date.now().toString()
        const task = { name: inputName, description: inputDescription, date: inputDate, time: inputTime, completed: false, id: date, dateCreate: date }
        tasks.push(task)
        setTasks([...tasks])
        setLocalStorage(tasks)
        isOpen()
    }

    return (
        <>
            <div className="new-task-background" onClick={() => isOpen()} />
            <div className="new-task">
                <button className="new-task__close" onClick={() => isOpen()} />
                <label className="new-task-label">
                    <span className="todo-column__Clue">name</span>
                    <input type="text" placeholder="input name of the task" onChange={(e) => setInputName(e.target.value)} />
                </label>
                <label className="new-task-label">
                    <span className="todo-column__Clue">description</span>
                    <input type="text" placeholder="input description of the task" onChange={(e) => setInputDescription(e.target.value)} />
                </label>
                <label className="new-task-label">
                    <span className="todo-column__Clue">date</span>
                    <input type="date" onChange={(e) => setInputDate(e.target.value)} />
                </label>
                <label className="new-task-label">
                    <span className="todo-column__Clue">time</span>
                    <input type="time" onChange={(e) => setInputTime(e.target.value)} />
                </label>
                <button className="new-task__button" onClick={() => {
                    addTask()
                }}>add task</button>
            </div>
        </>
    )
}
