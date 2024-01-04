import React, {  createContext, useState } from 'react'
import { useCookies } from 'react-cookie';

 export  const Usercontext = createContext();
 
 export const UserProvider = ({children}) => {
     const [cookies,setcookie,removiecookie] = useCookies([]);  
     function  setLogoutData( ){
      removiecookie("jwt");
     window.location.href = '/login'
     //  window.location.reload(false);
    
    //  console.log("Logoutttt");
      };
  return (

    <Usercontext.Provider value={{setLogoutData}}>
  {children}
    </Usercontext.Provider>
  )
}

