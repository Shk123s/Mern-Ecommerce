import React, { useState } from 'react'
import { useParams } from "react-router";
import { ToastContainer ,toast} from 'react-toastify';
const EditUser = () => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const {userUpdateId}  = useParams();
    // console.log(userUpdateId);
    const  Editpersondata = async (event)=>  
    { event.preventDefault();
      console.log(userUpdateId);
         try {
            let response  =await fetch(`http://localhost:4000/${userUpdateId} `,{
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                  },      
                body:JSON.stringify({
                    name:name,
                    price:price,
                })

            })
    
            let resJson = await response.json();
            if(response.status === 200)
            {
                setName("");
                setPrice("");
                toast.success("User updated successfully")
                // alert('Product updated successfully');
            }   
         } catch (error) {
             console.log(error.message);
         }
     } 
  return (
    <div>
      <h1 className='headingEdituser'>hello edit kro mujhe</h1>
      <div className='admineditform'>
         <form onSubmit={Editpersondata}> 
      <label>Enter your name:
        <input type="text" className='text-black'
        value={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      <br></br>
      <label>Enter your price:
        <input  className="m-4 text-black" type="number"
         value={price} onChange={(e)=>setPrice(e.target.value)} />
      </label>
      <button type="submit" className='updateebutton'>Update</button>
      </form>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default EditUser
