import { useState,useEffect, SetStateAction, Dispatch } from "react"
import style from './style/modal.module.css'

export const ShowModal=()=>{
   return(
    <>
      <div className={style.bodyModalShow}>
         <div className={style.showContent}></div>
         <div className={style.showContent}></div>
         <div className={style.showContent}></div>
      </div>
    </>
   )
  }
