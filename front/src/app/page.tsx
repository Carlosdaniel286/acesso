'use client'
import { Redirect } from 'next'
//import PortariaCadastro from './sistema/portaria/cadastro/page'
import { redirect } from 'next/navigation'
export default function Page(){
   return(
    redirect('/portaria/login')
   )
  
}

// pages/[slug].js

