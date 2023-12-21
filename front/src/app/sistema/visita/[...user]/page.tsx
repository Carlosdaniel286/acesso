'use client'
import on from './style/style.module.css'
import Scroll from './components/scroll/sroll'
import Nav from '../../components/navegador/nav'
import { useState } from 'react'
import { UserProvider } from '../../context/contetx'

export default function Mean() {
  
    return (
      <>
 <UserProvider>
      <div className={on.body} >
       
          <header className={on.seach}>
            <input type="text" 
             placeholder='pequise e encontre'
            />
         </header>
           <main>
            <div className={on.contentNav}>
                <Nav
                
                />
            </div>
                <Scroll />
             </main>
          </div>
        </UserProvider>
        </>
    )
  }
  