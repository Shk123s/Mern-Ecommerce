import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const UploadProduct = () => {
    const [newProduct,SetNewProduct]= useState({
        title:"",
        description:"",
        date:"",
        photo:"",
    });
    const handlePhoto = (e)=>{
        e.preventDefault();
        SetNewProduct({...newProduct,photo:e.target.files[0]});
        console.log({...newProduct,photo:e.target.files[0]});
     
    }
    const handlechange = (e)=>{
    SetNewProduct({...newProduct,[e.target.name]:e.target.value})
   
  }
    const handleSubmit = (e)=>{
        e.preventDefault();
   const formData = new FormData();
     formData.append("photo",newProduct.photo);
     formData.append("date",newProduct.date);
     formData.append("description",newProduct.description);
     formData.append("title",newProduct.title);
     axios.post('http://localhost:4000/uploadproduct',formData,{
      headers:{"Content-Type":"multipart/form-data"},
     })
     .then(res=>{
        console.log(res);
        toast.success("Product successfully Added");
     }).catch(err =>{
        console.log(err);
     });
    }
  return (
    <div className='adduseradminproduct'>
      <h1>Add product</h1>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        < input type='file'
        accept='.png,.jpg,.jpeg'
        name='photo'
        onChange={handlePhoto}/>
        < input type='text'
        placeholder='title'
        value={newProduct.title}
        name='title'
        onChange={handlechange}/>
        < input type='text'
         name='description'
        placeholder='description'
        value={newProduct.description}
        onChange={handlechange}/>
        < input type='date'
        placeholder='date'
        name='date'
        value={newProduct.date}
        onChange={handlechange}/>
        <div className="bg">

        </div>
    <button type='submit'>Submit</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default UploadProduct
