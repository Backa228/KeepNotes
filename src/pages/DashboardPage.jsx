import { LogOut } from "../features/auth/components/LogOut";
import { useSelector } from "react-redux";
import { selectUserName, selectUserLastName, selectUserBirthDate } from "../features/auth/api/selectors";

import { NotesPage } from "./NotesPage"

const DashboardPage = () => {
    const firstName = useSelector(selectUserName);
    const lastName = useSelector(selectUserLastName);
    const birthDate = useSelector(selectUserBirthDate);
    console.log(firstName, lastName, birthDate);
    return (
    
        <div>
            <h1 className="text-4xl text-gray-900 font-fold tracking-tight mb-6">Основна дошка</h1>
            {/* <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Birth Date: {birthDate}</p> */}
            <NotesPage/>
            <LogOut />
        </div>
    );
};

export default DashboardPage;