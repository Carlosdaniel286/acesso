'use client'
import { Redirect } from 'next'
import PortariaCadastro from './sistema/portaria/cadastro/page'
import { redirect } from 'next/navigation'
export default function Page(){
   return(
    redirect('http://localhost:3000/sistema/portaria/login')
   )
  
}

// pages/[slug].js

