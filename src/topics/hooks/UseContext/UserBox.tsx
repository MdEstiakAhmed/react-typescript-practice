import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserBox = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        userContext.setUser({name: 'XYZ', email: "xyz@xyz.com"});
    }

    const handleLogout = () => {
        userContext.setUser(null);
    }
    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <h1>name {userContext.user?.name}</h1>
            <h1>name {userContext.user?.email}</h1>
        </div>
    );
}

export default UserBox;