'use client'

import { ReactNode } from 'react';
import on from './style.module.css'
import Cadastros from '../../components/Form/form';
import Image from 'next/image';

export default function Logins () {
  const minhaFuncao = () => {
    console.log('Clicou no botão!');
  };
    return (
      <div className={on.Loginbody} >
          
         
         <div className={on.login}>
          
          <Cadastros 
          children={
            <>
               <input type="text" 
               placeholder='cpf'
              />
               <input type="text" 
               placeholder='senha'
              />
            </>
          }
          
          Onclik={minhaFuncao}
          header='login'
          />
         </div>
         
      </div>
    )
  }
  