import { Task } from "../tools/types";

export const TaskElement = (taskProps: { task: Task }) => {
    return (

        <tr className="todo-item">
            <td className="table__name">{taskProps.task.name}</td>
            <td className="table__description">{taskProps.task.description}</td>
            <td className="table__deadline"><input type="date" value={taskProps.task.date} /></td>
            <td className="table__isCompleted"><input type="checkbox" checked={taskProps.task.completed} /></td>
        </tr>

    )
}
