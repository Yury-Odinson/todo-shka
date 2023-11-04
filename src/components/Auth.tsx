import { useState } from "react"
import { authUser, saveTokens } from "../tools/authorization"
import { AuthUser } from "../tools/types"

export const Auth = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handlerLogin = async ({ email, password }: AuthUser) => {
        const tokens = await authUser({ email, password })
        saveTokens(tokens)
    }

    return (
        <div className="auth-container">
            <label>
                <input type="text" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                <input type="text" placeholder="enter pass" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                <button onClick={() => handlerLogin({ email, password })}>login</button>
            </label>
        </div>
    )
}
