import { useState,useEffect, SetStateAction, Dispatch, ChangeEvent } from "react"
type input={
    inputvalue: Dispatch<SetStateAction<string>>
}

export const InputCnh=({inputvalue}:input)=>{
    const[cnh, setCnh]=useState<string>('')
    useEffect(()=>{
      inputvalue(cnh)
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cnh])
    
    const handleCnhChange = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        const regex = /^\d+$/;
        const containerNumber = regex.test(text);
        if(!containerNumber) return
        if(cnh.length>11)return
        setCnh(text);
      };   
    
    return(
    
    <>
      <input type="text" 
       placeholder="cnh"
       onChange={handleCnhChange}
       value={cnh}
      />
              
    </>
    )
}