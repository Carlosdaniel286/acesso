/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import style from './options.module.css'
import { useEffect, useState } from 'react'
import { Input, useChangeInput } from '@/app/sistema/context/changeInputs'

export default function Options() {
    const{changeInput,setChangeInput}= useChangeInput()
 
  const options:Input[] = ['cpf', 'nome', 'codigo'];
    useEffect(()=>{
        console.log(changeInput)
        //setChangeInput('nome')
        
    },[changeInput])
  
  return(
        <div className={style.bodyOptions}>
           <div className={style.options}>
           <>
             {
               
             options.map((item,index)=>(
               <div key={index} >
               <p className={style.p} 
                onClick={(()=>setChangeInput(item))}
               >{item}</p>
               </div> 
             ))
            
            }
             </>
            

           </div>
          
        </div>
    )

}