import { useContext, useState } from "react"
import { updateToken } from "../tools/authorization"
import { TaskContext, logOut, tokenAccess, tokenRefresh } from "../tools/store"
import { NewTask } from "./NewTask"
import { TaskElement } from "./TaskElement"
import { useNavigate } from "react-router-dom"

export const Todo = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [sortCIncrease, setSortCIncrease] = useState<boolean>(true)
    const [sortDIncrease, setSortDIncrease] = useState<boolean>(true)

    const { tasks } = useContext(TaskContext)
    const { setTasks } = useContext(TaskContext)

    const navigate = useNavigate()

    const addTask = () => {
        setModalOpen(!modalOpen)
    }

    const handlerLogOut = () => {
        if (tokenAccess == "" || tokenAccess == undefined) {
            navigate("/")
        } else return
    }

    const sortCreate = (inrease: boolean) => {
        setSortCIncrease(!sortCIncrease)
        if (inrease) {
            tasks.sort((a: any, b: any) => a.dateCreate > b.dateCreate ? 1 : -1)
            setTasks([...tasks])
        } else {
            tasks.sort((a: any, b: any) => a.dateCreate > b.dateCreate ? -1 : 1)
            setTasks([...tasks])
        }
    }

    const sortDeadline = (increase: boolean) => {
        setSortDIncrease(!sortDIncrease)
        if (increase) {
            tasks.sort((a: any, b: any) => a.date > b.date ? 1 : -1)
            setTasks([...tasks])
        } else {
            tasks.sort((a: any, b: any) => a.date > b.date ? -1 : 1)
            setTasks([...tasks])
        }
    }

    return (
        <div className="todo-container">

            {modalOpen && <NewTask isOpen={addTask} />}

            <div className="todo-header">
                <div className="todo-header-wrapper">
                    <div className="todo-header-nav">
                        <button className="todo-header-nav__button" onClick={() => {
                            addTask()
                            updateToken(tokenRefresh)
                        }}>Add task</button>
                        <button className="todo-header-nav__button" onClick={() => sortCreate(sortCIncrease)}>sort by task create</button>
                        <button className="todo-header-nav__button" onClick={() => sortDeadline(sortDIncrease)}>sort by deadline</button>

                    </div>

                    <button className="todo-header__buttonLogout" onClick={() => {
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
