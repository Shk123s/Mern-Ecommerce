import React from 'react'

import App from '../App'
import { Outlet  } from "react-router-dom";
import Admin from '../Admin/Admin'
import HeaderAdmin  from "../Admin/HeaderAdmin/HeaderAdmin"
import  FooterAdmin  from "../Admin/FooterAdmin/FooterAdmin"
const Layout = () => {
  return (
    <div>
           <HeaderAdmin/> 
   
            
           <Admin/>
     
     
           <FooterAdmin/>
    </div>
  )
}

export default Layout
