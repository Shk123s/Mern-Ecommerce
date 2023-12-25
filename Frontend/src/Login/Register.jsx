import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate   } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const Navigate= useNavigate();
  const [Values,setValues] = useState({
    email:"",
    password:""
  });
  const generateError = (err)=> toast.error(err,{
    position: "top-right",
    
  });

  
const handlesubmit =async (e)=>
{
  e.preventDefault();
  try {
    const {data} = await axios.post("http://localhost:4000/register",{
        ...Values,
    },{
        withCredentials:true
    });
    if(data)
    {  
      // console.log(data.errors)
      // console.log(data.errors);
      if(data.errors)
      {
           const  {email,password} = data.errors;
           console.log(email)
           if (email) {
            generateError(email);
            
           }
           else if (password) {
            generateError(password);
           
           }
        }else{
          Navigate('/User');
        }
    }
  } catch (error) {
    console.log(error);
  }
}
  return (
  
    <div className='registerdiv'>
      <h1>Register </h1>
      <form className='register'  action="" onSubmit={handlesubmit}>
        <label htmlFor="email">Email </label>
        <input  type="email" name='email' placeholder='Email' onChange={(e)=>setValues({...Values,[e.target.name]:e.target.value})} />
        <label htmlFor="email">Password </label>
        <input type="password" name='password' placeholder='Password'  onChange={(e)=>setValues({...Values,[e.target.name]:e.target.value})} />
        <button className='btnreg' type="submit">Register</button>
        <span>
            Already have an account ?  
             <Link to="/login">
             Login
            </Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
       
  )
}

export default Register

