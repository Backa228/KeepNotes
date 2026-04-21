import LoginForm from "../features/auth/components/LoginForm"
import { useNavigate } from "react-router-dom" 
    
const LoginPage = () => {
    const navigate = useNavigate()

    return ( 
        <div>
            <h1>LoginPage</h1>
            <LoginForm />
            <button onClick={() => navigate("/register")}>Register</button>
        </div>
    )
}

export default LoginPage