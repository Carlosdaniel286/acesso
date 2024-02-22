import { Dispatch, SetStateAction } from "react";

export type helpsSeach ={
    setInput: Dispatch<SetStateAction<string>>,
    ev:string
}

export const handleCodigo =({ev,setInput}:helpsSeach)=>{
    const text = ev
    const regex = /^\d+$/;
    const containerNumber = regex.test(text);
    
    if(text==''){setInput(text)}
    if(!containerNumber) return
    if(text.split('').length>3)return
    setInput(text)
  }