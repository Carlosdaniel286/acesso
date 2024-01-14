'use client'

import { ReactNode } from 'react';
import on from './style.module.css'
import Link from 'next/link';
import { CadastrosProps } from '@/app/types/cadastros';
import dotenv from 'dotenv';
dotenv.config();
const urlBaseClient = process.env.NEXT_PUBLIC_URL_CLIENT


export default function Cadastros({children,Onclik,header,SelectButton}:CadastrosProps) {
    return (
      <div className={on.Cadbody} >
         <main>
         
          <div className={on.form}>
          <header><h1>{header}</h1></header>
             
                {children}
              
               <div className={on.submit}>
                {SelectButton==='1' && 
                 <button className={on.loginButton} onClick={Onclik}>{'enviar'}</button>
                   }
                   {SelectButton==='2' &&
                    <button className={on.CadastroButton }><Link style={{textDecoration: 'none'}} href={`${urlBaseClient}/sistema/portaria/login`}> ja tenho conta </Link> </button>
                  }
                    {SelectButton==='3' &&
                    <>
                    <button className={on.CadastroButton }><Link style={{color:'blue'}} href={`${urlBaseClient}/sistema/portaria/login`}> ja tenho conta </Link> </button>
                    <button className={on.loginButton} onClick={Onclik}>{'enviar'}</button>
                    </>
                  }


              </div>
             
              </div>
              
         </main>
      </div>
    )
  }
  