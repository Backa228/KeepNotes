import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn } from "../redux/auth/selectors";
// import { useSelector } from "react-redux";

export const PrivateRoute = ({ redirectTo = "/", component }) => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoggedIn = false

    return isLoggedIn ? component : <Navigate to={redirectTo} />;
};