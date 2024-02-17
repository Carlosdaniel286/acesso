/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

export type Names ={
  getValueOfName:((name:string)=>void)

}
export const InputName = ({getValueOfName}:Names) => {
  const[name , setName] =useState('')
  
  useEffect(()=>{
    //if(name=='') return
     getValueOfName(name)
  },[name])
  
  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
