import React, { useState } from 'react'

const disclourser = () => {
    const [IsOpen,setOpen] = useState(false);
    const  Onopen = ()=>{
   
     setOpen(true);
     }
    const  Onclose = ()=>{
     setOpen(false);
     }
  return {Onclose,Onopen,IsOpen}
  
}

export default disclourser
