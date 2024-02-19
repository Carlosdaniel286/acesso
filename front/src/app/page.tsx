'use client'
import { redirect } from 'next/navigation'
import PortariaCadastro from './sistema/portaria/cadastro/page'
import { useChangeInput } from './sistema/context/changeInputs'

export default function Page(){
   return(
    <>
    
      <PortariaCadastro/>
      
    </>
   )
  
}

// pages/[slug].js

