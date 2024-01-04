import React, {  createContext, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

 export  const Usercontext = createContext();
 
 export const UserProvider = ({children}) => {
    const [logoutData,setLogout]= useState(null);
     const [cookies,setcookie,removiecookie] = useCookies([]);  
     function  setLogoutData( ){
      removiecookie("jwt");
     window.location.href = '/login'
     //  window.location.reload(false);
    
     console.log("Logoutttt");
      };
  return (

    <Usercontext.Provider value={{setLogoutData}}>
  {children}
    </Usercontext.Provider>
  )
}

