'use client'
import { useState,useEffect, SetStateAction, Dispatch } from "react"
import Image from "next/image"
import style from './style/modal.module.css'
type modal= {
   setHidden: Dispatch<SetStateAction<boolean>>
   }
export const ShowModal=({setHidden}:modal)=>{
   return(
    <>
      <div className={style.bodyModalShow}>
        <div className={style.imgShow}>
          <Image
           src='/mais.png'
           height={50}
           width={50}
           alt=""
           style={{cursor:'pointer'}}
           onClick={(()=>(setHidden(true)))}

          />
        </div>
      </div>
    </>
   )
  }
