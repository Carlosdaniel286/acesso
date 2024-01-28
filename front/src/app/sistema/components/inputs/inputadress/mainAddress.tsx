'use client'
import Image from "next/image"
import style from './style/adress.module.css'
import { InputAdress } from "./andress"
import { useEffect, useState } from "react"
import { addressValue } from "@/app/types/inputs"


export type address ={
  setValueOfAddress:((value:addressValue[])=>void)
}

export const InputAdressMain = (value:address) => {
    const [valueOfAddress, setValueOfAddress]=useState<addressValue[]>([{
      lt:'',
      qd:''
    }]) 
    
    const getValueOfAddress =(value:addressValue)=>{
      //console.log(value)
      if(valueOfAddress[0].qd==''){
        setValueOfAddress([value])
      }else{
        setValueOfAddress([...valueOfAddress,value])
      }
     
      
     }
     useEffect(()=>{
       value.setValueOfAddress(valueOfAddress)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[valueOfAddress])
    
    
     const [inputadress, setInputadress] = useState([
        <>
        <InputAdress
       getValueOfAddress={getValueOfAddress}
        key={'1'}
        />
        </>
    ])
    const handleAddClick = () => {
        if(inputadress.length>10) return
       setInputadress((prevDivs) => [...prevDivs, <InputAdress key={prevDivs.length}
        getValueOfAddress={getValueOfAddress}
       />]);
      };
    
  useEffect(()=>{
  
  },[])

return(
    <div className={style.addressAdd}>
        <div className={style.addressArry}
        key={'2'}
        >
          
          {
            inputadress.map((item,id)=>(
             <div key={id} className={style.inputsOver}>{item}</div>
            ))
          
          }
        </div>
    
      <div className={style.imgAddress}>
        <Image
         src={'/adicionar.png'}
         alt=""
         width={30}
         height={30}
         layout="full"
         quality={100}
         style={{cursor:'pointer'}}
         onClick={(()=>{
            handleAddClick()
         })}
        />
       </div>
    </div>
   ) 
}