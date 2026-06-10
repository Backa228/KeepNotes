import { register } from "../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoading } from "../api/selectors";
import { useState } from "react";
import { Button } from "../../../shared/ui/Button"

export const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(selectIsLoading);

    const inputStyles = "flex-1 outline-none bg-transparent border border-gray-200 w-full p-2 rounded md-3"
    const labelStyles = "text-gray-600 md-1"

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        try {
            await dispatch(register({ email, password, firstName, lastName, birthDate })).unwrap();

            form.reset();
            navigate("/");
        } 
        catch (error) {
            console.error("Register error:", error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="
            flex
            flex-col
            justify-between
            items-start
            w-full
            transition">
            <label htmlFor="firstName" className={labelStyles}>First Name:</label>
            <input type="text" name="firstName" placeholder="Enter your first name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputStyles}  />
            <label htmlFor="lastName" className={labelStyles}>Last Name:</label>
            <input type="text" name="lastName" placeholder="Enter your last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputStyles}/>
            <label htmlFor="birthDate" className={labelStyles}>Birth Date:</label>
            <input type="date" name="birthDate" required value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            
            <label htmlFor="email" className={labelStyles}>Email:</label>
            <input type="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputStyles}/>
            <label htmlFor="password" className={labelStyles}>Password:</label>
            <input type="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputStyles}/>
            <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Registering..." : "Register"}
            </Button>
        </form>
    );
};