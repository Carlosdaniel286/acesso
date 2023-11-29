'use client'

import on from './style/style.module.css'
import Cadastros from '../../components/Form/form'
import { useState } from 'react';

export default function PortariaCadastro() {
  const [input , setInput]=useState({
    name:'',
    cpf:'',
    senha:''
  })
    
  const minhaFuncao = () => {
        alert('Clicou no botão!');
      };
    
    return (
      <div className={on.portBody} >
        <div className={on.port}>
         <Cadastros
          children={
            <>
             <input type="text" 
               placeholder='nome'
              />
              <input type="text" 
               placeholder='cpf'
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
  