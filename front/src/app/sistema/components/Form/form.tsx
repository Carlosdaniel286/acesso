'use client'

import { ReactNode } from 'react';
import on from './style.module.css'
import Link from 'next/link';
interface CadastrosProps {
   children: ReactNode;
   Onclik:()=>void
   header:string
   SelectButton:'1'|'2'|'3'
 }


export default function Cadastros({children,Onclik,header,SelectButton}:CadastrosProps) {
    return (
      <div className={on.Cadbody} >
         <main>
         
          <div className={on.form}>
          <header><h1>{header}</h1></header>
             
                {children}
              
               <div className={on.submit}>
                {SelectButton==='1' && 
                 <button className={on.loginButton} onClick={Onclik}>{'login'}</button>
                   }
                   {SelectButton==='2' &&
                    <button className={on.CadastroButton }><Link style={{textDecoration: 'none'}} href="http://localhost:3000/sistema/portaria/login"> ja tenho conta </Link> </button>
                  }
                    {SelectButton==='3' &&
                    <>
                     <button className={on.CadastroButton }><Link style={{color:'blue'}} href="http://localhost:3000/sistema/portaria/login"> ja tenho conta </Link> </button>
                    <button className={on.loginButton} onClick={Onclik}>{'login'}</button>
                    </>
                  }


              </div>
             
              </div>
              
         </main>
      </div>
    )
  }
  