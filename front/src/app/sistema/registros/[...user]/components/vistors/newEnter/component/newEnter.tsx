/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
'use client';
import style from '../style/enter.module.css';
import Cadastros from '@/app/sistema/components/Form/cadastros';
import { useEffect, useState } from 'react';
import { card } from '@/app/types/cards';
import { addressValue } from '@/app/types/inputs';
import Address from './addAdress';
import { ConnectSoket } from '@/app/sistema/context/socket';
import RenderAddress from './RenderAddress/getAddress';
import Image from 'next/image';
import { UserProviderHidden, useContextHiddent } from '@/app/sistema/context/hiddeNav';

type newEnters={
  address:addressValue[],
  visitorId: number,
 }

export default function NewEntry({ cards }: card) {
  const{setHiddeNav,hiddeNav }=useContextHiddent()
  const {socket}= ConnectSoket()
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([{
    lt: '',
    qd: ''
  }]);
  const [valueOfAddressClone, setValueOfAddresClone] = useState<addressValue[]>([{
    lt: '',
    qd: ''
  }]);
  const [AddAddres, setAddress] = useState(false);
  const [renderAddress, setRenderAddress] = useState(false);
  useEffect(() => {
    console.log(valueOfAddressClone)
  }, [valueOfAddressClone]);
  
  const newEnter =()=>{
    
    const newVisitor:newEnters ={
      address:valueOfAddressClone,
      visitorId:cards.id
    }
   socket?.emit('visitorsEnter',newVisitor)
   setHiddeNav({... hiddeNav,overflow:false})
  }
  
  
  const getValueOfAddress = (value: addressValue[]) => {
    setValueOfAddress(value);
  };
  
  
  const setValue = (value: boolean) => {
    setAddress(value);
  };
  const handleAddress = () => {
    setRenderAddress(!renderAddress)
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
                <div className={style.continer_RenderAddress}>
                   <Image
                    src={"/local.png"}
                    alt="Descrição da imagem"
                    width={60}
                     height={60}
                    style={{ borderRadius: "50%" }}
                    onClick={(()=>{setRenderAddress(true)})}
          /></div>
                {renderAddress && <>
                <RenderAddress
                cards={{cards}}
                handlerOverlay={handleAddress}
                />
                </>
                }
                <div>
                 
                  {valueOfAddressClone.map((item, id) => (
                    <div className={style.maps} key={id}>
                      {item.qd !== '' && item.lt !== '' && <>
                        <p key={id}>
                          qd: {item.qd}
                        </p>
                        <p key={id + 1}>
                          lt: {item.lt}
                        </p>
                        <p>dd</p>
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
          Onclik={newEnter}
          header="cadastro de visitantes"
          SelectButton="4"
        />
      </div>
    </div>
  );
}
