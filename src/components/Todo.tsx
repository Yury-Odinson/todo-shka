import { useState } from "react"
import { checkToken } from "../tools/authorization"
import { tasks, tokenRefresh } from "../tools/store"
import { NewTask } from "./NewTask"
import { TaskElement } from "./TaskElement"

export const Todo = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const addTask = () => {
        setModalOpen(!modalOpen)
    }

    const loadTasks = () => {
        return tasks.map(element => (
            <TaskElement task={element} key={element.id} />
        ));
    }
    return (
        <div className="todo-container">

            {modalOpen && <NewTask />}

            <div className="todo-header">
                <div className="todo-header-wrapper">
                    <button onClick={() => {
                        addTask()
                        checkToken(tokenRefresh)
                    }}>Add task</button>
                </div>
            </div>

            <div className="todo-body">
                <div className="todo-column">
                    <div className="todo-column__isCompleted">done</div>
                    <div className="todo-column__name">name</div>
                    <div className="todo-column__description">description</div>
                    <div className="todo-column__deadline">deadline</div>
                </div>
                {loadTasks()}
            </div>

        </div>
    )
}
