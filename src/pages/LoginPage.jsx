import LoginForm from "../features/auth/components/LoginForm"
import { useNavigate } from "react-router-dom" 
import { Button } from "../shared/ui/Button"
     
const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="w-screen min-h-screen flex items-center justify-center">
            <div className="
                flex
                max-h-[900px]
                max-w-[500px]
                w-full
                h-auto
                justify-between
                items-center
                gap-3
                flex-col
                max-w-md
                mx-auto
                bg-white/90
                py-3 px-5
                rounded-lg
                text-[15px]
                text-gray-800
                shadow-[0_0_12px_rgba(0,0,0,0.2)]
                hover:bg-white/100
                transition">
                <h1 className="text-xl font-bold">Cropiнкa входу</h1>
                <LoginForm />
                <Button onClick={() => navigate("/register")}> Register Page </Button>
            </div>
        </div>
    )
}

export default LoginPage