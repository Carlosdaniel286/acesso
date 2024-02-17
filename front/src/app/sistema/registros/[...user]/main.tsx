'use client'
import on from './style/style.module.css'
import Scroll from './components/scroll/sroll'
import Nav from '../../components/navegador/nav'
import { ShowModal } from '../../components/modal/showModal'
import { Modal } from '../../components/modal/modal'
import { useEffect, useRef, useState } from 'react'
import Seach from './components/serach/search'
import { useContextHiddent } from '../../context/hiddeNav'


export default function Mean() {
  const {hiddeNav} = useContextHiddent()
  
  
    return (
      <div className={on.body}>
      <header className=''>
          <div className={on.ClikModal} >
            <ShowModal/>
            {hiddeNav.modal && 
            <div className={on.contentModal}>
              <Modal/>
            </div>
            }
          </div>
           <div className={on.seach}>
          <Seach/>
           

           </div>
           
         </header>
         <main key={'2'} className={on.main}>
              <Scroll />
              
           </main>
          </div>
        
        
    )
  }
  