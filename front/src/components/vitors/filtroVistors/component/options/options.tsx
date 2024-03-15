/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import style from './options.module.css'
import { Input, useChangeInput } from '@/context/changeInputs'
import { useContextHiddent } from '@/context/hiddeNav'
type options ={
  diplayOptions:(()=>void)
}

export default function Options({diplayOptions}:options) {
    const{setChangeInput}= useChangeInput()
    const{setHiddeNav,hiddeNav}=useContextHiddent()
  const options:Input[] = ['cpf', 'nome', 'codigo'];
   
  return(
        <div className={style.bodyOptions}>
           <div className={style.options}>
           <>
             {
               options.map((item,index)=>(
               <div key={index} >
               <p className={style.p} 
                onClick={(()=>{
                  setChangeInput(item)
                   diplayOptions()
                   setHiddeNav({...hiddeNav,modal:false})
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