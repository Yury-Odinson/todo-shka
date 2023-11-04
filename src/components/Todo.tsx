import { useState } from "react"
import { checkToken } from "../tools/authorization"
import { tokenRefresh } from "../tools/store"
import { NewTask } from "./NewTask"

export const Todo = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const addTask = () => {
        setModalOpen(!modalOpen)
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

        </div>
    )
}
