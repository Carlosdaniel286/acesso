'use client'
import on from './style/style.module.css'
import Scroll from './components/scroll/sroll'
import Nav from '../../components/navegador/nav'
import { ShowModal } from '../../components/modal/showModal'
import { Modal } from '../../components/modal/modal'
import { useState } from 'react'
import Seach from './components/serach/search'



export default function Mean() {
  const[hidden,setHidden]=useState(false)
    return (
      
     
      <div className={on.body} >
      <header className=''>
          <div className={on.ClikModal} >
            <ShowModal
             setHidden={setHidden}
            />
            {hidden && 
            <div className={on.contentModal}>
              <Modal
               setHidden={setHidden}
              />
            </div>
            }
          </div>
           <div className={on.seach}>
           <Seach/>

           </div>
           
         </header>
         <div className={on.contentNav}>
                <Nav/>
            </div>
            
           <main key={'2'} className={on.main}>
              <Scroll />
           </main>
          </div>
        
        
    )
  }
  