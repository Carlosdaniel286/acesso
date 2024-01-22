/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
'use client'
import { SetStateAction, Dispatch, useEffect, useRef } from "react"
import style from './style/modal.module.css'
import Nav from "../navegador/nav"
import { useContextHiddent } from "../../context/hiddeNav"

type modal= {
setHidden: Dispatch<SetStateAction<boolean>>
}

export const Modal=()=>{
  const {setHiddeNav} = useContextHiddent()
  


   return(
    <>
     <div className={style.bodyModal}>
       <div  className={style.Navs}>
          <div className={style.hiddenNav}
         onClick={(()=>(setHiddeNav(false)))}
         >X</div>
         <Nav/>
       </div>
     </div>
     <div  className={style.hiddenModal}
      onClick={(()=>{
        setHiddeNav(false)
      })}
     ></div>
    </>
   )
  }
