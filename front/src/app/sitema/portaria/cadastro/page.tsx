'use client'

import on from './style/style.module.css'
import Cadastros from '../../components/Form/form'
import { useState } from 'react';
import { Inputscof } from '../helps/setcpf';

export default function PortariaCadastro() {
  const [input , setInput]=useState({
    name:'',
    cpf:'',
    senha:''
  })
  const[cpf, setCpfs]=useState<string>('')  
  
  
  const minhaFuncao = () => {
        alert('Clicou no botão!');
      };
    
    
    
      return (
      <div className={on.portBody} >
        <div className={on.port}>
         <Cadastros
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
             <input type="text" 
               placeholder='nome'
              />
              <Inputscof
              inputvalue={setCpfs}
              />
              
              <input type="text" 
               placeholder='senha'
              />
            </>
          }
          Onclik={minhaFuncao}
          header='cadastro'
         />
         </div>
         
      </div>
    )
  }
  