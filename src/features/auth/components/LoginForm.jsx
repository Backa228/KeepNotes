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
            flex justify-between gap-3 
            flex-col
            max-w-2xl 
            mx-auto
            bg-white/90 
            py-3 px-5 
            rounded-lg 
            text-[15px]
            text-gray-800
            shadow-[0_0_12px_rgba(0,0,0,0.2)]
            hover:bg-white/100 
            transition">
            <label htmlFor="email" className="text-gray-900">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 outline-none bg-transparent" />
            <label htmlFor="password" className="text-gray-900">Password:</label>
            <input type="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 outline-none bg-transparent" />
            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
            </Button>
        </form>
    )
}

export default LoginForm