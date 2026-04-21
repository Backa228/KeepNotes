import { register } from "../api/authApi"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectIsLoading } from "../api/selectors.js"
import { useState } from "react"

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(selectIsLoading);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const form = e.target

        try {
            await dispatch(register({ email, password })).unwrap()

            form.reset()
            navigate("/")
        }
        catch (error) {
            console.error("Register error:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
            </button>
        </form>
    )
}

export default RegisterForm