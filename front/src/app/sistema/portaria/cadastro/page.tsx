'use client'

import on from './style/style.module.css'
import Cadastros from '../../components/Form/form'
import { useState } from 'react';
import { Inputcpf } from '../../components/inputcpf/cpf';
import { useUser } from '../../context/contetx';

export default function PortariaCadastro() {
  
  const { cnh} = useUser();
  console.log(cnh)
   
  
  
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
              <Inputcpf
             
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
  