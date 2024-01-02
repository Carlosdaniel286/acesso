import { useUser } from "../../context/contetx"

import { useState,useEffect, SetStateAction, Dispatch, ChangeEvent } from "react"


export const InputCnh=()=>{
  const {inputs ,setInputs}= useUser();
   
    const handleCnhChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        const regex = /^\d+$/;
        const containerNumber = regex.test(text);
        
        if(text==''){setInputs({...inputs,cnh:text})}
        if(!containerNumber) return
        if(text.split('').length>11)return
       
        setInputs({...inputs,cnh:text})
      };   
    
    return(
    
    <>
      <input type="text" 
       placeholder={'cnh'}
       onChange={handleCnhChange}
       value={inputs.cnh}
      />
              
    </>
    )
}