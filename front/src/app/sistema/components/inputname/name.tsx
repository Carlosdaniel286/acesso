import { useState,useEffect, SetStateAction, Dispatch } from "react"
import { useUser } from "../../context/contetx";

export const InputName=({text}:{text:string})=>{
  const { nome, updateNome} = useUser();
  
   
 const handleNomeChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    const isValidInput = regex.test(inputValue);

    if (isValidInput) {
        updateNome(inputValue);
      }
   }
    
    return(
    <>
        <input type="text" 
        placeholder={text}
        onChange={handleNomeChange}
        value={nome}
        />
        </>
    )
  }
