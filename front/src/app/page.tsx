'use client'
import { redirect } from 'next/navigation'
import Mean from './sistema/Mean/[...user]/page'
import Cadastros from './sistema/components/Form/form'

export default function Page(){
   return(
    <>
      <Mean/>
    </>
   )
  
}

// pages/[slug].js

