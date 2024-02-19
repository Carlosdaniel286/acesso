'use client'

import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import on from './style.module.css'
import Link from 'next/link';
import { CadastrosProps } from '@/app/types/cadastros';
import dotenv from 'dotenv';
import { useContextHiddent } from '../../context/hiddeNav';
dotenv.config();
const urlBaseClient = process.env.NEXT_PUBLIC_URL_CLIENT


export default function Cadastros({children,Onclik,header,SelectButton}:CadastrosProps) {
 const [value, setvalue]=useState('')
  const {setHiddeNav,hiddeNav} = useContextHiddent()
  const[heightSubmit, setheightSubmit] =useState(20)
  useEffect(()=>{
    if(SelectButton==='4'){
      setvalue('sair')
    
    }
    if(SelectButton==='1' || SelectButton ==='3'){
      setheightSubmit(30)
    }
  },[SelectButton])

    return (
      <div className={on.Cadbody} >
         <main>
         
          <div className={on.form}>
         
          <header><h1>{header}</h1></header>
          
                {children}
              
               <div style={{height:`${heightSubmit}%`}} className={on.submit}>
                {SelectButton==='1' && 
                <>
                 <button className={on.loginButton} onClick={Onclik}>{'enviar'}</button>
                 <span className={on.CadastroButton }><Link style={{color:'blue',fontSize:'20px'}} href={`${urlBaseClient}/`}> retorna ao cadastro </Link> </span>
                 </>
                   }
                   {SelectButton==='4' && 
                <>
                    <button className={on.loginButton4} onClick={Onclik}>{'enviar'}</button>
                    <div className={on.value}
                    onClick={(()=>(setHiddeNav({...hiddeNav,modal:false,overflow:false})))}
                    ><button>{value}</button></div>
                
                 </>
                   }
                   {SelectButton==='2' &&
                    <button className={on.CadastroButton }><Link style={{textDecoration: 'none'}} href={`${urlBaseClient}/sistema/portaria/login`}> ja tenho conta </Link> </button>
                  }
                    {SelectButton==='3' &&
                    <>
                    <button className={on.loginButton} onClick={Onclik}>{'enviar'}</button>
                    <span className={on.CadastroButton }><Link style={{color:'blue',fontSize:'20px'}} href={`${urlBaseClient}/sistema/portaria/login`}> ja tenho conta </Link> </span>
                    </>
                  }


              </div>
             
              </div>
              
         </main>
      </div>
    )
  }
  