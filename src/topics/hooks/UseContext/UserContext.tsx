import { createContext, useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

type AuthContextProps = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext({} as AuthContextProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
