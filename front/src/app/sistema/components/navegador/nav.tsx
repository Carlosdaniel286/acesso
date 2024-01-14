/* eslint-disable react/no-children-prop */
'use client'
import Link from 'next/link'
import nav from './style/nav.module.css'
import Overlay from '../overlay/hidden'
import VisitaCadastros from './components/cadastros/form'
import { useState } from 'react'
import Filtro from './components/filtro/filtro'
///sistema/visita/cadastros
export default function Nav() {
   const[hidden ,setHidden]=useState(false)
    
    return (
      <nav className={nav.nav} >
        {hidden &&
          <Overlay 
          children={
            <>
              <VisitaCadastros
               setHidden={setHidden}
              />
             </>
            }
            setHidden={setHidden}
          />
          }
         <ul>
           <Filtro/>
            <li 
            onClick={(()=>(setHidden(!hidden)))}
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
  