/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
"use client";
import style from "../../style/enter.module.css";
import Cadastros from "@/app/sistema/components/Form/cadastros";
import { useEffect, useState } from "react";
import { card } from "@/app/types/cards";
import { addressValue } from "@/app/types/inputs";
import Address from "../addAdress/addAdress";
import { ConnectSoket } from "@/app/sistema/context/socket";
import RenderAddress from "../RenderAddress/getAddress";
import {useContextHiddent} from "@/app/sistema/context/hiddeNav";
import IconeUser from "../icones/iconeUser";
import IconeDrive from "../icones/iconeDrive";
import IconeID from "../icones/iconeID";
import IconeCod from "../icones/iconeCod";
import IconeLocal from "../icones/iconeLocal";
import IconeAttend from "../icones/iconeAttend";

import { newEnterVistor } from "./helper/newEnterVistor/newEnterVisitor";
import { newExitVistor } from "./helper/outSideVistor/outsideVistor";

export type newEnters = {
  address: addressValue[];
  visitorId: number;
};

export default function NewEntry({ cards }: card) {
  
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  const { socket } = ConnectSoket();
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([
    {
      lt: "",
      qd: "",
    },
  ]);
  const [renderAddAddres, setRenderAddAddress] = useState(false);
  const [renderAddress, setRenderAddress] = useState(false);
  const [controll, setControll] = useState<'Exit'|'Enter'>(cards.controll);
  
  const getValueOfAddress = (value: addressValue[]) => {
    setValueOfAddress(value);
  };

  const setDisplayAddAddress = () => {
    setRenderAddAddress(!renderAddAddres);
  };
  const handleAddress = () => {
    setRenderAddress(!renderAddress);
  };

  const handleExitVistor =()=>{
    if(controll==='Exit'){
      newExitVistor({socket,valueOfAddress,cards,setHiddeNav,hiddeNav})
    }if(controll==='Enter'){
      setDisplayAddAddress()
      }
  }
 useEffect(()=>{
 if(!socket) return
 socket.emit('cache',cards.id)
 socket.on("cache", async(state:string) => {
  if(state==='Enter' ||  state==="Exit"){
    setControll(state)
  }
 })

},[socket,controll,cards])
  
  
  return (
    <div className={style.bodyEnter}>
      {renderAddAddres && (
        <div className={style.conent_address}>
          <Address
            getValueOfAddress={getValueOfAddress}
            setDisplayAddAddress={setDisplayAddAddress}
            handleNewEnter={(()=>{
            // setControll('Exit')
              newEnterVistor({socket,valueOfAddress,cards,setHiddeNav,hiddeNav})
             })} 
             />
        </div>
      )}
      <div className={style.move}>
        <Cadastros
          children={
            <div className={style.Infomation}>
              <div className={style.p_Infomation}>
                <div className={style.iconesInfo}> <IconeUser/> {cards.name}</div>
                <div className={style.iconesInfo}> <IconeID/> {cards.cpf}</div>
              </div>
              <div className={style.p_Infomation}>
              <div className={style.iconesInfo}><IconeDrive/> {cards.license}</div>
                   <div id={style.cod_p}>
                   <div className={style.iconesInfo}><IconeCod/> {cards.id}</div>
                  </div>
              </div>
               <span>atendente</span>
              <div className={style.p_Infomation}>
              <div className={style.iconesInfo}> <IconeAttend/> {cards.User.name}</div>
              </div>

              <div className={style.clickRenderAddress }>
               <IconeLocal
               setRenderAddress={handleAddress}
               />
              
                {renderAddress && (
                  <>
                    <RenderAddress
                      id={cards.id}
                      handlerOverlay={handleAddress}
                    />
                  </>
                )}
                
              </div>
              
            </div>
          }
          Onclik={(()=>{
            handleExitVistor()
            //setControll('Enter')
           
          })}
          header="cadastro de visitantes"
          SelectButton={controll}
        />
      </div>
    </div>
  );
}
