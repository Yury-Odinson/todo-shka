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
                <table>
                    <thead>
                        <tr>
                            <td className="table__name">name</td>
                            <td className="table__description">description</td>
                            <td className="table__deadline">deadline</td>
                            <td className="table__isCompleted">is completed?</td>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {loadTasks()}
                    </tbody>
                </table>
            </div>





        </div>
    )
}
