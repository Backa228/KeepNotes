import { LogOut } from "../features/auth/components/LogOut"
import { useSelector } from "react-redux"
import { selectUserName, selectUserLastName, selectUserBirthDate } from "../features/auth/api/selectors"

const DashboardPage = () => {
    const firstName = useSelector(selectUserName)
    const lastName = useSelector(selectUserLastName)
    const birthDate = useSelector(selectUserBirthDate)
    console.log(firstName, lastName, birthDate)
    return ( 
        <div>
            <h1>DashboardPage</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{birthDate}</p>
            <LogOut/>
        </div>
    )
}

export default DashboardPage