import { useContext, useState } from "react"
import { updateToken } from "../tools/authorization"
import { TaskContext, logOut, tokenAccess, tokenRefresh } from "../tools/store"
import { NewTask } from "./NewTask"
import { TaskElement } from "./TaskElement"
import { useNavigate } from "react-router-dom"

export const Todo = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const { tasks } = useContext(TaskContext)

    const navigate = useNavigate()

    const addTask = () => {
        setModalOpen(!modalOpen)
    }

    const handlerLogOut = () => {
        if (tokenAccess == "" || tokenAccess == undefined) {
            navigate("/")
        } else return
    }

    return (
        <div className="todo-container">

            {modalOpen && <NewTask isOpen={addTask} />}

            <div className="todo-header">
                <div className="todo-header-wrapper">
                    <button className="todo-header__button" onClick={() => {
                        addTask()
                        updateToken(tokenRefresh)
                    }}>Add task</button>
                    <button className="todo-header__button" onClick={() => {
                        logOut()
                        handlerLogOut()
                    }}>log out</button>
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
