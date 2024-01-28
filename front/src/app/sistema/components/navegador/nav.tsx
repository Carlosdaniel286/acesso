/* eslint-disable react/no-children-prop */
'use client'
import Link from 'next/link'
import nav from './style/nav.module.css'
import Overlay from '../overlay/hidden'
import VisitaCadastros from './components/cadastros/form'
import { useEffect, useState } from 'react'
import Filtro from './components/filtro/filtro'


export default function Nav() {
   const[hidden ,setHidden]=useState(false)
   
  
    return (
     
      <nav className={nav.nav} >
        {hidden &&
          <Overlay 
          children={
            <div className={nav.limit}>
              <VisitaCadastros
               setHidden={setHidden}
              />
             </div>
            }
           value={true}
          />
          }
         <ul>
           <Filtro/>
            <li 
            onClick={(()=>{
              setHidden(!hidden)

              
            })}
            >
            cadastro de visitantes
            
          </li>
            <li>visitantes</li>
            <li>entradas</li>
            <li>saidas</li>
         </ul>
        
      </nav>
      
    )
  }
  