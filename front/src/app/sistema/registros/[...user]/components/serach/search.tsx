/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import style from './style/search.module.css'
import { ConnectSoket } from "@/app/sistema/context/socket"
import { useVisitors } from "@/app/sistema/context/visitors"
import { ChangeEvent, useEffect, useState } from "react"
import Image from 'next/image'
import { InputName } from '@/app/sistema/components/inputname/name'
import { Inputcpf } from '@/app/sistema/components/inputcpf/cpf'
import { useChangeInput } from '@/app/sistema/context/changeInputs'
import { useUser } from '@/app/sistema/context/contetx'
import { handleCodigo } from './help/help'

export default function Seach() {
    const[input , setInput]=useState('')
    const {socket} = ConnectSoket()
    const {visitors ,setVisitors}= useVisitors();
    const{changeInput,setChangeInput}= useChangeInput()
    const {inputs }= useUser();
  
  
useEffect(()=>{
    if(input!=''){
    const length = input.split('')
    const fillter = visitors.filter((item)=>{
     return item.name.slice(0,length.length)==input
    })
   setVisitors([...fillter])
   if(input==''){
    if(!socket) return
    socket.emit("getvisitor", "");
   }
}
  
if(inputs){
  let length = []
  if(inputs.name) length = inputs.name.split('')
  if(inputs.cpf) length = inputs.cpf.split('')
  const fillter = visitors.filter((item)=>{
   return item.cpf.toString().slice(0,length.length)==inputs.cpf
  })
  console.log(fillter)
 setVisitors([...fillter])
}else{
  if(!socket) return
  socket.emit("getvisitor", "");
}



  },[input,inputs])
    
    

    return(
        <div className={style.serachbody}>
          {changeInput ==='cpf' &&   <Inputcpf /> }
          {changeInput ==='nome' &&   <InputName text='digite um nome' /> }
          {changeInput ==='codigo' &&  <>
           <input type="text" 
           placeholder='codigo'
           value={input}
           onChange={((ev)=>handleCodigo({ev:ev.target.value,setInput}))}
           />
          </> }
           
            
          
            <div className={style.buttonSearch}>
                <Image 
                 alt='enviar'
                 width={60}
                 height={60}
                 src={'/enviado.png'}
                />
            </div>
        </div>
    )

}