/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect, SetStateAction, Dispatch } from "react"
import { useUser } from "../../context/contetx";
import style from './style/adress.module.css'


export const InputAdress=()=>{
  const {inputs,setInputs} = useUser();
  const [addres, setAddres]=useState({
    qd: '',
    lt: ''
  })
   
  useEffect(()=>{
    const qd= Number(addres.qd);
    const lt= Number(addres.lt);
    const clone ={...addres,qd,lt}
    setInputs({...inputs,address:clone})
  },[addres,inputs])



  const handleQd =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const inputValue = e.target.value.split('')
    const last = inputValue[inputValue.length-1]
  
    if (!isNaN(Number(last)) || last === '0' || last ===undefined) {
     if(inputValue.length>3) return
       const join = inputValue.join('')
       
       setAddres({...addres,qd:join})
      }
      
      
}

const handleLt =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const inputValue = e.target.value.split('')
    const last = inputValue[inputValue.length-1]
  
    if (!isNaN(Number(last)) || last === '0' || last ===undefined) {
     if(inputValue.length>3) return
       const join = inputValue.join('')
       const lt= Number(join);
       setAddres({...addres,lt:join})
      }

   

}
    
    return(
    <div className={style.adress}>
        <input type="text" 
        placeholder={'qd'}
        onChange={handleQd}
        value={addres.qd}
        />

        <input type="text" 
        placeholder={'lt'}
        onChange={handleLt}
        value={addres.lt}
        />
        </div>
    )
  }
