
'use client'

import on from './style/card.module.css'
import { card } from '@/app/types/cards';
import Image from 'next/image';

export default function CardVisita({cards}:card){

return (
        <div className={on.bodyVisit}>
          <div className={on.person} >
            <div className={on.visitimg} >
              <Image
                 src={'/user.jpg'}
                  alt="Descrição da imagem"
                  width={100}
                  height={100}
                  style={{borderRadius:'50%'}}
                />
            </div>
            <div className={on.content}>
            <ul >
                <li>nome:{cards.name}</li>
                <li>cpf:{cards.cpf}</li>
                <li>codigo:{cards.id}</li>
                <li className={on.linone}>atendente:{cards.User.name}</li>
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