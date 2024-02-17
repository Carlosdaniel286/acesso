/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */

'use client';

import style from '../style/enter.module.css';
import Cadastros from '@/app/sistema/components/Form/cadastros';
import { useEffect, useState } from 'react';
import { InputAdressMain } from '@/app/sistema/components/inputs/inputadress/mainAddress';
import { card } from '@/app/types/cards';
import { addressValue } from '@/app/types/inputs';

export default function NewEntry({ cards }: card) {
  const [valueOfAddress, setValueOfAddress]=useState<addressValue[]>([{
    lt:'',
    qd:''
  }]) 
  
  const getValueOfAddress =(value:addressValue[])=>{
    setValueOfAddress(value)
    }
  
  return (
    <div className={style.bodyEnter}>
      <div className={style.move}>
        <Cadastros
          children={
            <div className={style.Infomation}>
              <p>Nome: {cards.name}</p>
               <p>cnh: {cards.license}</p>
                <div className={style.continerMap}>
                  Enderço
                 
                {cards.inside.map((item,id)=>(
                  <div className={style.maps} key={id}>
                  <p key={id}>
                    qd: {item.Address.qd}
                   
                  </p>
                  <p key={id+1}>
                    lt: {item.Address.lt}
                  </p>
                  </div>
                ))}
                 <InputAdressMain
                  setValueOfAddress={getValueOfAddress}
                  />
                </div>
              <p>cpf: {cards.cpf}</p>
            </div>
          }
          Onclik={(()=>{})}
          header="cadastro de visitantes"
          SelectButton="4"
        />
      </div>
    </div>
  );
}
