
'use client'
import Image from 'next/image'
import style from './filtro.module.css'
export default function Filtro() {

   return(
    <>
        <div className={style.filtroBody} >
             <Image
              alt='filtro'
              width={60}
              height={60}
              src='/filtro.png'
              style={{cursor:'pointer'}}
              />
              <p>filtro</p>
           </div>
    </>
   )
}