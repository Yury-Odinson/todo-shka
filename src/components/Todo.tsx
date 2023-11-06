import { useContext, useEffect, useState } from "react"
import { checkToken } from "../tools/authorization"
import { TaskContext, tokenRefresh } from "../tools/store"
import { NewTask } from "./NewTask"
import { TaskElement } from "./TaskElement"

export const Todo = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const { tasks } = useContext(TaskContext)

    const addTask = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className="todo-container">

            {modalOpen && <NewTask isOpen={addTask} />}

            <div className="todo-header">
                <div className="todo-header-wrapper">
                    <button className="todo-heade__buttonAdd" onClick={() => {
                        addTask()
                        checkToken(tokenRefresh)
                    }}>Add task</button>
                </div>
            </div>

            <div className="todo-body">
                {tasks.map(element => (
                    <TaskElement task={element} key={element.id} />
                ))}
            </div>

        </div>
    )
}
