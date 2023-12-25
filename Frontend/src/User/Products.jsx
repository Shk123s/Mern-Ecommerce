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
    
  return (
    <div>
      <h1 className="headStore">Back to store</h1>
      {Products.map((product)=>{
        return <div key={product._id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.data}</p>
          <img src={`src/images/${product.photo}`} alt={product.title}/>
         {/* { console.log(product.photo)} */}
            </div>

      })}
    </div>
  )
}

export default Products
