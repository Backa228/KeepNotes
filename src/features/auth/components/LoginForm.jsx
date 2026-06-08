import { logIn } from "../api/authApi"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectIsLoading } from "../api/selectors.js"
import { useState } from "react"
import { Button } from "../../../shared/ui/Button"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(selectIsLoading);

    const inputStyles = "flex-1 outline-none bg-transparent border border-gray-200 w-full p-2 rounded md-3"

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
        <form onSubmit={handleSubmit} className="
            flex
            flex-col
            justify-between
            items-start
            gap-3
            w-full
            transition">
            <label htmlFor="email" className="text-gray-900">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputStyles} />
            <label htmlFor="password" className="text-gray-900">Password:</label>
            <input type="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputStyles} />
            <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Logging in..." : "Log In"}
            </Button>
        </form>
    )
}

export default LoginForm