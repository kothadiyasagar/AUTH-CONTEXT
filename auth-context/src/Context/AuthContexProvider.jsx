import React, { useState } from "react";

export const AuthContext = React.createContext()

const AuthContextProvider = ({children})=>{
    const [isAuth, setisAuth,]=useState(false)
    const[token,setToken]=useState("")
    const toggle =(item)=>{
        setisAuth(item)
         setToken("")
    }
    const handleLogin = (username,item) => {
        //  setisAuth(false);
        setToken(Date.now() + username);
      };
    const value ={isAuth,token ,toggle,handleLogin}
    return<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export {AuthContextProvider}