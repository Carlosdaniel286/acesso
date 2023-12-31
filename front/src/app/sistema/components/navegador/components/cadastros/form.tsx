'use client'

import on from './style.module.css'
import Cadastros from '../../../Form/form'
import { Inputcpf } from '../../../inputcpf/cpf';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { InputCnh } from '../../../inputCnh/cnh';
import { InputName } from '../../../inputname/name';
import { useUser } from '@/app/sistema/context/contetx';
import { InputAdress } from '../../../inputadress/andress';
interface Props {
   setHidden: Dispatch<SetStateAction<boolean>>
 }


export default function VisitaCadastros({setHidden}:Props) {
  
  const {inputs ,setInputs}= useUser();
   
   const minhaFuncao = () => {
      setHidden(false)
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

         Onclik={minhaFuncao}
         header='cadastro de vistantes'
         SelectButton='1'
         />
         </div>
      </div>
    )
  }
  