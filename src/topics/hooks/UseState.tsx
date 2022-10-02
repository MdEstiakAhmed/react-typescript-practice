import { useState } from "react";

type UserData = {
    name: string,
    age: number,
}

type AddressData = {
    address: string,
}

const UseState = () => {
    // basic useState
    const [status, setStatus] = useState(false);

    // defined type
    const [user, setUser] = useState<UserData>({ name: "", age: 0 });

    // defined future type
    const [address, setAddress] = useState<AddressData | null>(null);

    // type assertion
    const [userData, setUserData] = useState<UserData>({} as UserData);
    
    const handleStatusChange = () => {
        // only change same type of value. like boolean to boolean, string to string, number to number
        setStatus(prev => !prev);
    }

    const handleUserChange = () => {
        // only change same type of value. like boolean to boolean, string to string, number to number
        setUser({ name: "XYZ", age: 25 });
    }

    const handleAddressChange = () => {
        // only change same type of value. like boolean to boolean, string to string, number to number
        setAddress({ address: "New Model Town" });
    }

    const handleUserDataChange = () => {
        // only change same type of value. like boolean to boolean, string to string, number to number
        setUserData({ name: "ABC", age: 30 });
    }
    return (
        <>
            <h3>{status.toString()}</h3>
            <button onClick={handleStatusChange}>change use state value</button>

            <h3>{user.name} {user.age}</h3>
            <button onClick={handleUserChange}>change user data</button>

            <h3>{address?.address}</h3>
            <button onClick={handleAddressChange}>change address data</button>

            <h3>{userData.name} {userData.age}</h3>
            <button onClick={handleUserDataChange}>change user data</button>
        </>
    )
}

export default UseState;