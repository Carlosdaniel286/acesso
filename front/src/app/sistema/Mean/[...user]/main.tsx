'use client'
import on from './style/style.module.css'
import Scroll from './components/scroll/sroll'
import Nav from '../../components/navegador/nav'
import { UserProvider } from '../../context/contetx'
import { ShowModal } from '../../components/modal/showModal'
import { Modal } from '../../components/modal/modal'
import { useState } from 'react'
export type project ={
  name: string ,
  cpf:number,
  id:number
}


export type mean={
  arry:project[]
}

export default function Mean({arry}:mean) {
  const[hidden,setHidden]=useState(false)
    return (
      
 
      <div className={on.body} >
      <header className={on.seach}>
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
          
            <input type="text" 
             placeholder='pequise e encontre'
            />
         </header>
         <div className={on.contentNav}>
                <Nav/>
            </div>
            
           <main className={on.main}>
              <Scroll 
               arry={arry}
              />
           </main>
          </div>
        
        
    )
  }
  