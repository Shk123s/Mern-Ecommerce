import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'

function AddUser() {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    // const [mobileNumber,setMobileNumber] = useState("");
    const [message,setMessage] = useState("");

    let handleSubmit = async (e)=>
    {
        e.preventDefault();
        try {
            let res =await fetch("http://localhost:4000/post ",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                  },      
                body:JSON.stringify({
                    name:name,
                    price:price,
                })

            })
            let resJson = await res.json();
            console.log(resJson);
            if(res.status === 200)
            {
                setName("");
                setPrice("");
                toast.success("User created successfully")
                console.log(" sucesss");
            }
            else
            {
                console.log(" sucesss nhi mila");
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='adduseradmin'>
         <form onSubmit={handleSubmit}> 
      <label>Name:
        </label>
        <input type="text" className='text-black'
        value={name} onChange={(e)=>setName(e.target.value)} />
     
     
      <label>Price:
        </label>
        <input  className="m-4 text-black" type="number"
         value={price} onChange={(e)=>setPrice(e.target.value)} />
      <button type="submit">Create</button>
      </form>
      <ToastContainer/>
      
    </div>
  )
}

export default AddUser
