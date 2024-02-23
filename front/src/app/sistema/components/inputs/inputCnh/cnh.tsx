/* eslint-disable react-hooks/exhaustive-deps */
"use client";


import { ChangeEvent, useEffect, useState } from "react";
export type cnh ={
  getValueOfCnh:((cnh:string)=>void)
  value?:'clean' 
  update?:string
}

export const InputCnh = ({getValueOfCnh,value,update}:cnh) => {
 const[cnh ,setCnh]=useState('')
 
 useEffect(()=>{
  getValueOfCnh(cnh)
 },[cnh])

 useEffect(()=>{
  if(value) setCnh('')
  if(update) setCnh(update) 
  },[value,update])
 
  const handleCnhChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const regex = /^\d+$/;
    const containerNumber = regex.test(text);

    if (text == "") {
      setCnh(text);
    }
    if (!containerNumber) return;
    if (text.split("").length > 11) return;
    //console.log(inputs.address)
    return setCnh(text)
  };

  return (
    <>
      <input
        type="text"
        placeholder={"cnh"}
        onChange={handleCnhChange}
        value={cnh}
      />
    </>
  );
};
