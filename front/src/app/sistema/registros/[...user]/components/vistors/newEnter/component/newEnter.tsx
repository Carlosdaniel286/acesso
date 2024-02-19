/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */

'use client';

import style from '../style/enter.module.css';
import Cadastros from '@/app/sistema/components/Form/cadastros';
import { useEffect, useState } from 'react';
import { card } from '@/app/types/cards';
import { addressValue } from '@/app/types/inputs';
import Address from './addAdress';
import { isTypedArray } from 'util/types';

export default function NewEntry({ cards }: card) {
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([{
    lt:'',
    qd:''
  }]);
  const [valueOfAddressClone, setValueOfAddresClone] = useState<addressValue[]>([{
    lt:'',
    qd:''
  }]);
   
  useEffect(()=>{
   console.log(valueOfAddressClone)
   },[valueOfAddressClone])
  
  const getValueOfAddress = (value: addressValue[]) => {
    setValueOfAddress(value);
  };
 const [AddAddres, setAddress] = useState(false);
 
 const setValue = (value:boolean) => {
   setAddress(value)
};

  return (
    <div className={style.bodyEnter}>
      {AddAddres && 
        <div className={style.conent_address}>
          <Address 
          getValueOfAddress={getValueOfAddress} 
          setValue={setValue}
         setValueOfAddresClone={setValueOfAddresClone}
          valueOfAddressClone={valueOfAddressClone}
          valueOfAddress={valueOfAddress}

          />
          
        
        </div>
      }
      <div className={style.move}>
        <Cadastros
          children={
            <div className={style.Infomation}>
              <div className={style.p_Infomation}>  
                <p>Nome: {cards.name}</p>
                <p>cpf: {cards.cpf}</p>
              </div>
              
              <div className={style.p_Infomation}>
                <p>cnh: {cards.license}</p>
                <div id={style.cod_p}>
                  <p>codigo: {cards.id}</p>
                </div>
              </div>
               
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
                <div>
                <p>adiconados</p>
                  {valueOfAddressClone.map((item ,id)=>(
                   <div className={style.maps} key={id}>
                    {item.qd!=='' && item.lt!=='' && <>
                <p key={id}>
                   qd: {item.qd}
                 </p>
                 <p key={id+1}>
                   lt: {item.lt}
                 </p>
                 </>
                 }
               </div>
                  
                  ))
                   }
                </div>
              </div>
              
              <div className={style.button}>
                <button onClick={() => { setAddress(!AddAddres) }}>adiconar enderço</button>
              </div>
            </div>
          }
          Onclik={() => {}}
          header="cadastro de visitantes"
          SelectButton="4"
        />
      </div>
    </div>
  );
}
