import { Route, Navigate, Outlet } from 'react-router-dom'


const useAuth = () => {
    const user = { loggedIn : false};
    return user && user.loggedIn
}

const PrivateRoute = () => {
    const authenticated = useAuth();
    return authenticated ? <Outlet /> : <Navigate to='/login' /> 
}

export default PrivateRoute