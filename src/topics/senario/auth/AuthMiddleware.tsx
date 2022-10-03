import Login from "./Login"

type AuthMiddleWareProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<any>
}

export const AuthMiddleware = ({isLoggedIn, component: Component}: AuthMiddleWareProps) => {
    if(isLoggedIn) {
        return <Component />
    }
    return <Login />
}