'use client'

import on from './style.module.css'
import Cadastros from '../../../Form/form'
import { Inputcpf } from '../../../inputcpf/setcpf';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { InputCnh } from '../../../inputCnh/cnh';
interface Props {
   setHidden: Dispatch<SetStateAction<boolean>>
 }


export default function VisitaCadastros({setHidden}:Props) {
   const[cpf, setCpf]=useState('')
   const[cnh, setCnh]=useState('')
   
   const minhaFuncao = () => {
      setHidden(false)
    };
    
    useEffect(()=>{
      console.log(cnh)
     },[cnh])
    
    
     return (
      <div className={on.Cadbodys} >
         <div className={on.main}>
         <Cadastros
         // eslint-disable-next-line react/no-children-prop
         children={
            <>
        
            <input type="text" 
               placeholder='nome'
              />
              <Inputcpf
               inputvalue={setCpf}
              
               //onChang{(e: { target: { value: any; }; }) => setInput({ ...input, cpf: e.target.value })}
              />
              <input type="text" 
               placeholder='endereço'
              />
               <InputCnh 
                inputvalue={setCnh}
               />
              
            </>
             
         
         }

         Onclik={minhaFuncao}
         
         header='cadastro de vistantes'
         />
         </div>
      </div>
    )
  }
  