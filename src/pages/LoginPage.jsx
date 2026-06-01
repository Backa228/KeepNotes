import LoginForm from "../features/auth/components/LoginForm"
import { useNavigate } from "react-router-dom" 
import { Button } from "../shared/ui/Button"
     
const LoginPage = () => {
    const navigate = useNavigate()

    return ( 
        <div>
            <h1>LoginPage</h1>
            <LoginForm />
            <Button onClick={() => navigate("/register")}>Register</Button>
        </div>
    )
}

export default LoginPage