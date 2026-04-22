import { register } from "../api/authApi"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectIsLoading } from "../api/selectors.js"
import { useState } from "react"

const RegisterForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector(selectIsLoading);

    const handleSubmit = async(e) => {
        e.preventDefault()

        const form = e.target

        try {
            await dispatch(register({ email, password, birthDate, lastName, firstName })).unwrap()

            form.reset()
            navigate("/")
        }
        catch (error) {
            console.error("Register error:", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" placeholder="Enter your first name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" placeholder="Enter your last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label htmlFor="birthDate">Birth date: </label>
            <input type="date" name="birthDate" required value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            
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