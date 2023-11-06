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
            <p className="HowToUse">
                <p>Autorization is worked! Default state contains correct email and password.
                    Everything you need to do - press button "Let me in!"
                    If you change value in the input - you set incorrect data and you authorization will be failed.
                </p>
                <p>авторизация рабочая. в стейт уже вбит корректный email и пароль.
                    всё, что нужно сделать - нажить кнопку "Let me in!"
                    при любом изменении в инпутах - стейт изменится, соответственно авторизация не пройдёт успешно.
                </p>
            </p>
            <label className="auth-label">
                <input type="text" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="auth-label">
                <input type="text" placeholder="enter pass" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label className="auth-label">
                <button onClick={() => handlerLogin({ email, password })}>Let me in!</button>
            </label>
        </div>
    )
}
