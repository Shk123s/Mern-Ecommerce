import React, { useEffect, useMemo, useState } from 'react'

const Products = () => {
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
    }, [])
    
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
         <button className='btn'>Buy</button>
            </div>

      })}
    </div>
    </>)
}

export default Products
