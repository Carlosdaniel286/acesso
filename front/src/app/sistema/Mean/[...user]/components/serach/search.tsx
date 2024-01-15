/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import style from './style/search.module.css'
import { ConnectSoket } from "@/app/sistema/context/socket"
import { useVisitors } from "@/app/sistema/context/visitors"
import { ChangeEvent, useEffect, useState } from "react"
import Image from 'next/image'

export default function Seach() {
    const[input , setInput]=useState('')
    const {socket} = ConnectSoket()
    const {visitors ,setVisitors}= useVisitors();
    
  useEffect(()=>{
    if(input!=''){
    const length = input.split('')
    const fillter = visitors.filter((item)=>{
     return item.name.slice(0,length.length)==input
    })
   setVisitors([...fillter])
}else{
    if(!socket) return
    socket.emit("getvisitor", "");
}
  },[input])
    
    const value =(ev:ChangeEvent<HTMLInputElement>)=>{
      const data =ev.target.value
      setInput(data)

     
  }

    return(
        <div className={style.serachbody}>
         <input type="text" 
             placeholder='codigo e cpf ou nome'
             value={input}
             onChange={((ev)=>(value(ev)))}
            />
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