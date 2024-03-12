/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import style from './options.module.css'
import { useEffect, useState } from 'react'
import { Input, useChangeInput } from '@/context/changeInputs'

type options ={
  diplayOptions:(()=>void)
}

export default function Options({diplayOptions}:options) {
    const{setChangeInput}= useChangeInput()
 
  const options:Input[] = ['cpf', 'nome', 'codigo'];
   
  
  return(
        <div className={style.bodyOptions}>
           <div className={style.options}
          
           >
           <>
             {
               
             options.map((item,index)=>(
               <div key={index} >
               <p className={style.p} 
                onClick={(()=>{
                  setChangeInput(item)
                   diplayOptions()
                })}
               >{item}</p>
               </div> 
             ))
            
            }
             </>
            

           </div>
          
        </div>
    )

}