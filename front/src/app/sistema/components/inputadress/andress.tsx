import { useState,useEffect, SetStateAction, Dispatch } from "react"
import { useUser } from "../../context/contetx";
import style from './style/adress.module.css'


export const InputAdress=({text}:{text:string})=>{
  const {adress,updateAdress} = useUser();
  
   
const handleQd =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const inputValue = e.target.value.split('')
    const last = inputValue[inputValue.length-1]
  
    if (!isNaN(Number(last)) || last === '0' || last ===undefined) {
     if(inputValue.length>3) return
       const join = inputValue.join('')
       updateAdress({...adress,qd:join})
      }

      
}

const handleLt =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const inputValue = e.target.value.split('')
    const last = inputValue[inputValue.length-1]
  
    if (!isNaN(Number(last)) || last === '0' || last ===undefined) {
     if(inputValue.length>3) return
       const join = inputValue.join('')
       updateAdress({...adress,lt:join})
      }

   

}
    
    return(
    <div className={style.adress}>
        <input type="text" 
        placeholder={'qd'}
        onChange={handleQd}
        value={adress.qd}
        />

        <input type="text" 
        placeholder={'lt'}
        onChange={handleLt}
        value={adress.lt}
        />
        </div>
    )
  }
