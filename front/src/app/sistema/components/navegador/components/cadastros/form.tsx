'use client'

import on from './style.module.css'
import Cadastros from '../../../Form/form'
import { Inputcpf } from '../../../inputcpf/cpf';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { InputCnh } from '../../../inputCnh/cnh';
import { InputName } from '../../../inputname/name';
import { useUser } from '@/app/sistema/context/contetx';
import { InputAdress } from '../../../inputadress/andress';
import axios from 'axios';
import { useVisitors } from '@/app/sistema/context/visitors';
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
  const {inputs ,setInputs}= useUser();
  const {visitors ,setVisitors}= useVisitors();
   
   const Request =async () => {
      setHidden(false)
      const response = await axios.post('http://localhost:3001/visitors', { name:inputs.name, cpf:inputs.cpf,cnh:inputs.cnh,address:inputs.address,idUser:1})
      if(response.status===200){
        const response = await axios.get(`http://localhost:3001/getvisitor/visits`)
        const res = response.data as project[]
         setVisitors([...res])
      }
      
    };
    
    
    
    
    
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

         Onclik={ Request}
         header='cadastro de vistantes'
         SelectButton='1'
         />
         </div>
      </div>
    )
  }
  