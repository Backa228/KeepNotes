import { logIn } from "../api/authApi"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectIsLoading } from "../api/selectors.js"
import { useState } from "react"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(selectIsLoading);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const form = e.target

        try {
            await dispatch(logIn({ email, password })).unwrap()

            form.reset()
            navigate("/")
        }
        catch (error) {
            console.error("Login error:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
            </button>
        </form>
    )
}

export default LoginForm