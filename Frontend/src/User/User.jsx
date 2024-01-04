import React, { useContext, useEffect, useState } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {useCookies} from "react-cookie";
import { Link, useNavigate   } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { Usercontext } from '../Context/UserContext';
const User = () => {
    const [user,setuser]= useState([]);
    const {setLogoutData} = useContext(Usercontext);
    const Navigate = useNavigate();
         const [cookies,setcookie,removiecookie] = useCookies([]); 
       
         
          // setLogoutData(()=> {
          //   removiecookie("jwt")
          //   console.log("hogyaaa")
          // }); // You may pass any necessary arguments here
      
    useEffect(()=>{

  
    fetdata();
    },[]);
    const fetdata = async ()=>{
      try {
         const response = await fetch('http://localhost:4000');
      const data = await response.json(); 
     //  console.log(response);
      setuser(data);
      } catch (error) {
         console.log(error);
      }
     }
    // const Navigate = useNavigate();
    // const [cookies,setcookie,removiecookie] = useCookies([]);
    useEffect(()=>{
      const verifyUser  = async  ()=>{
       if (!cookies.jwt) {
        Navigate('/login')
       }
       else
       {
        const {data} = await axios.post("http://localhost:4000",{},{withCredentials:true});
        if(!data.status)
        {
         removiecookie("jwt");
         Navigate('/login');
        }
        else
        {
          toast(`Hi ${data.user}`,{theme:"dark"});
          console.log("ddddd")
        }
       }
      
      } 
     return ()=>  verifyUser();
    },[cookies,Navigate,removiecookie]);
    //  setLogoutData(()=> {
    //         removiecookie("jwt")
    //         console.log("hogyaaa")
    //       }); // You may pass any necessary arguments here
   
  return (
    <>
      <Header/>
    <div className='text-center m-20'>
      <h1 className="userh1"> Users Only</h1>
      {user.map((userData) => {
        return (
           
          <div className="text-white text-2xl" key={userData.id}>
            <h1> Name : {userData.name}</h1>
            <h1>Price : {userData.price}</h1>
          </div>
        );
      })}
       {/* <button type='button'onClick={Logout} >Logout</button> */}
      <ToastContainer/>
    </div>
      <Footer/>
  </>
  )
}

export default User
