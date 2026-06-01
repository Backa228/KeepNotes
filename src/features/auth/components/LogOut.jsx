import { useDispatch } from "react-redux";
import { logOut } from "../api/authApi";
// import { resetTasks } from "../../redux/tasks/tasksSlice";
import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/ui/Button"

export const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logOut());
        navigate("/login");
        // dispatch(resetTasks());
    }
    return (
        <div>
            <Button className="bg-white" onClick={handleLogOut}>Log Out</Button>
        </div>
    )
};