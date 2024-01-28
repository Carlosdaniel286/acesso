/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */

'use client';

import style from '../style/enter.module.css';
import Cadastros from '@/app/sistema/components/Form/cadastros';
import { useEffect, useState } from 'react';
import { InputAdressMain } from '@/app/sistema/components/inputs/inputadress/mainAddress';
import { card } from '@/app/types/cards';

export default function NewEntry({ cards }: card) {
  
  
  return (
    <div className={style.bodyEnter}>
      <div className={style.move}>
        <Cadastros
          children={
            <div className={style.Infomation}>
              <p>Nome: {cards.name}</p>
              
              <p>cnh: {cards.license}</p>
              <p>cpf: {cards.cpf}</p>
            </div>
          }
          Onclik={(()=>{})}
          header="cadastro de visitantes"
          SelectButton="1"
        />
      </div>
    </div>
  );
}
