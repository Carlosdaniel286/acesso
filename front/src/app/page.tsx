'use client'
import { redirect } from 'next/navigation'
import PortariaCadastro from './sistema/portaria/cadastro/page'
import { UserProvider } from './sistema/context/contetx'

export default function Page(){
   return(
    <>
     <UserProvider>
      <PortariaCadastro/>
      </UserProvider>
    </>
   )
  
}

// pages/[slug].js

