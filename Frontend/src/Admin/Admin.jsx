import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
const Admin = () => {
    const [user,setuser]= useState([]);
    const  deleteUser = async (userid)=>  
   {
     console.log(userid);
        try {
            const deleteresponse =await  fetch(`http://localhost:4000/${userid}`,{
                method:'DELETE'});
            const final = await deleteresponse.json(); 
            console.log(final);
            if (deleteresponse.ok) {
              // Filter out the deleted user from the state
              const updatedUsers = user.filter((userData) => userData._id !== userid);
              console.log(deleteresponse.ok);
              toast.error("User deleted  successfully ")
             setuser(updatedUsers);
            }
        } catch (error) {
            console.log(error);
        }
    } 
    useEffect(()=>{

   const fetdata = async ()=>{
     try {
      const response = await fetch("http://localhost:4000/");
      // console.log(response);
      // if (!response.ok) {
      //   throw new Error(`Request failed with status: ${response.status}`);
      // }
     const data = await response.json(); 
     setuser(data);
     } catch (error) {
        console.log(error);
     }
    }
     fetdata();
    },[]);
  return (
    <div className='text-center m-20 admindatadiv'>
      <h1 className="userh1"> Hello Admin</h1>
      {user.map((userData) => {
        return ( 
          <div key={userData._id}  className="userdatabox">
            <h1> Name : {userData.name}</h1>
            <p>Price : {userData.price}</p>
           <Link to={`/EditUser/${userData._id}`}>
           <FaEdit className="editicon" />
           </Link>
          
          
            <RiDeleteBin6Fill  onClick={() => deleteUser(userData._id)} className="deleteicon"/>
          </div>
        );
      })}
      <ToastContainer/>
  
    </div>
  )
}

export default Admin
