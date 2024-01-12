/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import on from './style.module.css'
import Cadastros from '../../../Form/form'
import { Inputcpf } from '../../../inputcpf/cpf';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { InputCnh } from '../../../inputCnh/cnh';
import { InputName } from '../../../inputname/name';
import { useUser } from '@/app/sistema/context/contetx';
import { InputAdress } from '../../../inputadress/andress';
import { useVisitors } from '@/app/sistema/context/visitors';
import dotenv from 'dotenv';
import { ConnectSoket } from '@/app/sistema/context/socket';
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE
export type project ={
  name: string ,
  cpf:number,
  id:number
}


export type mean={
  arry:project[]
}
interface Props {
   setHidden: Dispatch<SetStateAction<boolean>>
 }


export default function VisitaCadastros({setHidden}:Props) {
  const {inputs}= useUser();
  const {setVisitors}= useVisitors();
  const {socket} = ConnectSoket()
  
  
  const Requests =async () => {
      setHidden(false)
      if(socket){
        socket.emit("visitors", { name:inputs.name, cpf:inputs.cpf,cnh:inputs.cnh,address:inputs.address,idUser:1});
        
      }
  };
 
  useEffect(()=>{
    if(!socket) return
    socket.on("getvisitors", (msg:project[]) => {
        console.log(msg);
        setVisitors([...msg])
      })

      socket.on("bom", (msg) => {
        console.log(msg);
        
      })
    
  
},[])
    
  return (
      <div className={on.Cadbodys} >
        <div className={on.main}>
         <Cadastros
         // eslint-disable-next-line react/no-children-prop
         children={
            <>
        
            <InputName 
             text='name'
            />
            <Inputcpf/>
              
             <InputAdress
              text=''
             />
               
            <InputCnh />
              
            </>
             
         
         }

         Onclik={ Requests}
         header='cadastro de vistantes'
         SelectButton='1'
         />
         </div>
      </div>
    )
  }
  