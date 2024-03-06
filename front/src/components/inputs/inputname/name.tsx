/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

export type Names ={
  getValueOfName:((name:string)=>void)
  update?:(()=>void)
}
export const InputName = ({getValueOfName,update}:Names) => {
  const[name , setName] =useState('')
    
  
  
  useEffect(()=>{
   getValueOfName(name)
   console.log(name)
  },[name])
  useEffect(()=>{
   if(update){
    update()
   }
},[update])
  
  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //if(update) return setName(update)
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    const isValidInput = regex.test(inputValue);
   
    if (isValidInput) {
      const name = inputValue
      setName(name)
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={'digite um nome'}
        onChange={handleNomeChange}
        value={name}
      />
    </>
  );
};
