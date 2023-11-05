import { useContext, useState } from "react";
import { Task } from "../tools/types";
import { TaskContext, setLocalStorage } from "../tools/store";

export const TaskElement = (taskProps: { task: Task }) => {

    const [completed, setCompleted] = useState<boolean>(taskProps.task.completed)
    const [readOnly, setReadOnly] = useState<boolean>(true)

    const [name, setName] = useState(taskProps.task.name)
    const [description, setDescription] = useState(taskProps.task.description)
    const [date, setDate] = useState(taskProps.task.date)
    const [time, setTime] = useState(taskProps.task.time)

    const getTaskDate = () => {
        const day = new Date(Number(taskProps.task.id)).getDate()
        const month = new Date(Number(taskProps.task.id)).getMonth() + 1
        const year = new Date(Number(taskProps.task.id)).getFullYear()
        return `${day}.${month}.${year}`
    }

    const { tasks } = useContext(TaskContext)       // tasks array in the context
    const { setTasks } = useContext(TaskContext)    // function of the changes context

    const indexOf = tasks.indexOf(taskProps.task)   // declarate index task on the array

    const removeTask = () => {
        tasks.splice(indexOf, 1)
        setTasks(tasks)
        setLocalStorage(tasks)
    }

    const changeCompleted = () => {
        setCompleted(tasks[indexOf].completed = !completed)
        setTasks(tasks)
        setLocalStorage(tasks)
    }

    const editTask = () => {
        setReadOnly(!readOnly)
        const updated: any = {
            name: name,
            description: description,
            date: date,
            time: time
        }
        const task: any = tasks[indexOf]
        // update cpecific object keys
        for (const key in updated) {
            if (updated.hasOwnProperty(key)) {
                task[key] = updated[key]
            }
        }
        // write changes in the context & update localStorage
        setTasks(tasks)
        setLocalStorage(tasks)
    }

    return (
        <div className="todo-item">
            <div className="table__isCompleted">
                <input type="checkbox" checked={completed} onChange={() => changeCompleted()} />
            </div>
            <input className="table__name" readOnly={readOnly} value={name} onChange={(e) => setName(e.target.value)} />
            <input className="table__description" readOnly={readOnly} value={description} onChange={(e) => setDescription(e.target.value)} />
            <div className="table__deadline">
                <input type="date" value={date} readOnly={readOnly} onChange={(e) => setDate(e.target.value)} />
                <input type="time" value={time} readOnly={readOnly} onChange={(e) => setTime(e.target.value)} />
            </div>
            <button onClick={() => removeTask()}>X</button>
            <button onClick={() => editTask()}>change</button>
            <span className="todo-item__date">task create: {getTaskDate()}</span>
        </div>
    )
}
