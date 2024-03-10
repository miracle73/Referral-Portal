import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const userData = JSON.parse(localStorage.getItem('logged_in'));
    //const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    
    const [token, setToken] = useState(userData ? userData?.token : '');
    const [user, setUser] = useState(userData ? userData?.user : null);
    

    const logout = () => {
        setToken('');
        setUser(null);
        localStorage.removeItem('logged_in');
        window.location.reload();
    }

    /**const updateActivenav = (val) => {
        setActivenav(val);
    }*/

    useEffect(() => {
        
        if(localStorage.getItem('logged_in')){
            
            setToken(userData?.token);
            setUser(userData?.user);
          
        }
    }, [])

 


    return(
        <AuthContext.Provider value={{ token, user, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider