import { Navigate } from "react-router-dom";
import { selectisAuth } from "../../features/auth/api/selectors";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ redirectTo = "/", children }) => {
    const isAuth = useSelector(selectisAuth);

    if (isAuth) {
        return <Navigate to={redirectTo}/>
    }

    return children;
};

export default RestrictedRoute