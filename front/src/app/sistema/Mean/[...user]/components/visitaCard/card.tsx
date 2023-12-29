/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import on from './style/card.module.css'
import Image from 'next/image'


export default function CardVisita(){
 
return (
        <div className={on.bodyVisit}>
          <div className={on.person} >
            <div className={on.visitimg} >
              <img
                 src={'/user.jpg'}
                  alt="Descrição da imagem"
                  width={100}
                  height={100}
                  style={{borderRadius:'50%'}}
                />
            </div>
            <div className={on.content}>
            <ul >
               <li>nome:</li>
               <li>cpf:</li>
               <li>codigo:</li>
               <li className={on.linone}>atendente:</li>
            </ul>
             </div>
          </div>
          <div className={on.button}>
            
              <button className={on.inside}>enter</button>
              <button className={on.outside}>saida</button>
              <button className={on.info}>info</button>
            </div>
        </div>
    )
}