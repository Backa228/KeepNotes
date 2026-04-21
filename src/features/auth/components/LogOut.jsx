import { useDispatch } from "react-redux";
import { logOut } from "../api/authApi";
// import { resetTasks } from "../../redux/tasks/tasksSlice";
import { useNavigate } from "react-router-dom"

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
            <button type="button" onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    )
};