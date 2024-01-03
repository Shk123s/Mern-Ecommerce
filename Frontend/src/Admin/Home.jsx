import React, { useEffect, useMemo, useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
const Home = () => {
    const [Products ,setProducts]= useState([]);
    useEffect(() => {
      
    const Productdata = async()=>{
        try {
        const productitemdata = await fetch("http://localhost:4000/getproducts");
        console.log(productitemdata);
        const responsedata = await productitemdata.json();
        setProducts(responsedata);
        console.log(responsedata);
        } catch (error) {
            console.log(error);
        }

    }
    Productdata();
    }, []);
        const  deleteUserproduct = async (userid)=>  
   {
     console.log(userid);
        try {
            const deleteresponse =await  fetch(`http://localhost:4000/delete/${userid}`,{
                method:'DELETE'});
            const final = await deleteresponse.json(); 
            console.log(final);
            if (deleteresponse.ok) {
              // Filter out the deleted user from the state
              const updatedUsers = Products.filter((Products) => Products._id !== userid);
              console.log(deleteresponse.ok);
              toast.error("User deleted  successfully ")
              setProducts(updatedUsers);
            }
        } catch (error) {
            console.log(error);
        }
    } 

  return (<>
      <h1 className="headStore">Back to store</h1>
    <div className='headstoreDiv'>
      {Products.map((product)=>{
        return <div className="headStoreitem" key={product._id}>
          <img src={`src/images/${product.photo}`} alt={product.title}/>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.date}</p>
         {/* { console.log(product.photo)} */}
         {/* <button >Edit</button> */}
         <button onClick={() => deleteUserproduct(product._id)} className="deleteiconadminproductimage">
           delete
           </button>
         <div class="headStoreitembutton">
         <button className='btn'>Buy</button>
  </div>
       
            </div>

      })}
    </div>
    <ToastContainer/>
    </>
    )
   
  
}

export default Home
