import { checkToken, tokenRefresh } from "../tools/authorization"

export const Todo = () => {


    return (
        <div className="todo-container">
            <h1>hello</h1>
            <button onClick={() => checkToken(tokenRefresh)}>update</button>
        </div>
    )
}
