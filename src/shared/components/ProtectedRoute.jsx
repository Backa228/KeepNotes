import { Navigate } from "react-router-dom";
import { selectisAuth } from "../../features/auth/api/selectors";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ redirectTo = "/login", children }) => {
    const isAuth = useSelector(selectisAuth);
    console.log("isAuth:", isAuth)

    if (!isAuth) {
        return <Navigate to={redirectTo}/>
    }

    return children;
};

export default ProtectedRoute