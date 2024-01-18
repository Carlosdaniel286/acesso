
'use client'
import Image from 'next/image'
import style from './filtro.module.css'
import Options from './component/options/options'
import { useState } from 'react'

export default function Filtro() {
 const[hidden , setHidden]=useState(false)
   
   //.filtroBody
   return(
    <div className={style.filtroBody}>
      {hidden &&
            <>
             <Options/>
             </> 
             }
        <div className={style.filtroConetnt} 
         onClick={(()=>(setHidden(!hidden)))}>
             <Image
              alt='filtro'
              width={60}
              height={60}
              src='/filtro.png'
              
              />
              <p>filtro</p>
           </div>
    </div>
   )
}