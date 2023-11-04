import { useState } from "react"
import { authUser, saveTokens } from "../tools/authorization"
import { AuthUser } from "../tools/types"
import { useNavigate } from "react-router-dom"

export const Auth = () => {

    const [email, setEmail] = useState<string>("noname5087@yandex.ru")
    const [password, setPassword] = useState<string>("P@ssw0rd!")

    const navigate = useNavigate()
    
    // check login & password. if log/pass = true => link *****/todo
    const handlerLogin = async ({ email, password }: AuthUser) => {
        const tokens = await authUser({ email, password })
        saveTokens(tokens)
        if (tokens.access !== "" && tokens.access !== undefined) {
            navigate("/todo")
        } else {
            alert("check email or password!")
        }
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
