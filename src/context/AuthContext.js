import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    let [authTockens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/users/token/', {
            method:'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        }) 

        let data = await response.json()

        console.log('data : ', data)
        console.log('Response : ' , response)

        
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access));
            setIsAuthenticated(true);
        }else{
            alert('Something went wrong !')
        }
    } 

    const logout = () => {
        setAuthTokens(null);
        setIsAuthenticated(false);
        setUser(null);
      };
    
      useEffect(() => {
        console.log("user has changed to:", user);
      }, [user]);

      const contextData = {
        isAuthenticated,
        user,
        loginUser,
        logout,
      };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}