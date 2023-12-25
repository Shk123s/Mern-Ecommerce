import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Login from './Login/Login.jsx'
import Layout from './layout/Layout.jsx'
import { BrowserRouter, Route, Routes,useParams } from 'react-router-dom'
import Admin from './Admin/Admin.jsx'
import User from './User/User.jsx'
import AddUser from './Admin/AddUser.jsx'
import EditUser from './Admin/EditUser.jsx'
import Register from './Login/Register.jsx'
import UploadProduct from './Admin/Upload/UploadProduct.jsx'
import Products from './User/Products.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
        
          
        <Route exact path="*" element={<Register/>}/>
        <Route exact path="/App" element={<App/>}/>
        <Route exact path="/admin" element={<Layout/>}/>
        {/* <Route exact path="/admin" element={<Admin/>}/> */}
        <Route exact path="/User" element={<User/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/AddUser" element={<AddUser/>}/>
        <Route exact path="/Products" element={<Products/>}/>
        <Route exact path="/uploadproduct" element={<UploadProduct/>}/>
        <Route exact path="/EditUser/:userUpdateId" element={<EditUser/>}/>
       
      </Routes>

   
   </BrowserRouter>
  </React.StrictMode>,
)
