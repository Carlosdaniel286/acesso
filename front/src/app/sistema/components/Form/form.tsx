'use client'

import { ReactNode } from 'react';
import Image from 'next/image';
import on from './style.module.css'
interface CadastrosProps {
   children: ReactNode;
   Onclik:()=>void
   header:string
 }


export default function Cadastros({children,Onclik,header}:CadastrosProps) {
    return (
      <div className={on.Cadbody} >
         <main>
         
          <div className={on.form}>
          <header><h1>{header}</h1></header>
               
                {children}
                
               <div className={on.submit}>
                 <button onClick={Onclik}>enviar</button>
              </div>
             
              </div>
              
         </main>
      </div>
    )
  }
  