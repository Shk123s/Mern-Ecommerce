import React, {  createContext, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { Link, useNavigate   } from 'react-router-dom'

 export  const Usercontext = createContext();
 
 export const UserProvider = ({children}) => {
    const [logoutData,setLogout]= useState(null);
//     const Navigate = useNavigate();
     const [cookies,setcookie,removiecookie] = useCookies([]);  
  //    function  setLogoutData( ){
  //     removiecookie("jwt");
  //     history.push('/login');
  //     console.log('Logout');
     
  //            console.log("Logoutttt")
  // };
    // const value= {Logout}
  return (

    <Usercontext.Provider value={{logoutData,setLogout,}}>
  {children}
    </Usercontext.Provider>
  )
}

