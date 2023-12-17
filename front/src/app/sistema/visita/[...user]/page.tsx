'use client'
import on from './style/style.module.css'
import Scroll from './components/scroll/sroll'
import Nav from '../../components/navegador/nav'
import { useState } from 'react'


export default function Mean() {
  
    return (
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
    )
  }
  