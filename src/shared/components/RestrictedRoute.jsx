import { Navigate } from "react-router-dom";
// import { selectisAuth } from "../redux/auth/selectors";
// import { useSelector } from "react-redux";

const RestrictedRoute = ({ redirectTo = "/", children }) => {
    // const isAuth = useSelector(selectisAuth);
    const isAuth = false

    if (isAuth) {
        return <Navigate to={redirectTo}/>
    }

    return children;
};

export default RestrictedRoute