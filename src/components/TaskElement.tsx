import { useContext } from "react";
import { Task } from "../tools/types";
import { TaskContext, setLocalStorage } from "../tools/store";

export const TaskElement = (taskProps: { task: Task }) => {

    const getTaskDate = () => {
        const day = new Date(Number(taskProps.task.id)).getDate()
        const month = new Date(Number(taskProps.task.id)).getMonth() + 1
        const year = new Date(Number(taskProps.task.id)).getFullYear()
        return `${day}.${month}.${year}`
    }

    const { tasks } = useContext(TaskContext)
    const { setTasks } = useContext(TaskContext)


    const removeTask = () => {
        // console.log(tasks)
        const indexOf = tasks.indexOf(taskProps.task)
        console.log(tasks.indexOf(taskProps.task))
        tasks.splice(indexOf, 1)
        setTasks(tasks)
        setLocalStorage(tasks)
    }

    return (
        <div className="todo-item">
            <div className="table__isCompleted"><input type="checkbox" /></div>
            <div className="table__name">{taskProps.task.name}</div>
            <div className="table__description">{taskProps.task.description}</div>
            <div className="table__deadline">
                <input type="date" value={taskProps.task.date} readOnly />
                <input type="time" value={taskProps.task.time} readOnly />
            </div>
            <span className="todo-item__date">task create: {getTaskDate()}</span>
            <button onClick={() => removeTask()}>X</button>
        </div>
    )
}
