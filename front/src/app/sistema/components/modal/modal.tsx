/* eslint-disable react/no-children-prop */
'use client'
import { useState,useEffect, SetStateAction, Dispatch } from "react"
import Image from "next/image"
import style from './style/modal.module.css'
import Overlay from "../overlay/hidden"
import Nav from "../navegador/nav"

type modal= {
setHidden: Dispatch<SetStateAction<boolean>>
}

export const Modal=({setHidden}:modal)=>{
   
   return(
    <>
     <div className={style.bodyModal}>
       <div className={style.Navs}>

         <div className={style.hiddenNav}
         onClick={(()=>(setHidden(false)))}
         >X</div>
        <Nav/>
       </div>
     </div> 
    </>
   )
  }
