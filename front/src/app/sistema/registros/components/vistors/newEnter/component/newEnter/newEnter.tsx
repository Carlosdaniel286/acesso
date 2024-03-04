/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
"use client";
import style from "../../style/enter.module.css";
import Cadastros from "@/app/sistema/components/Form/cadastros";
import { useEffect, useState } from "react";
import { card } from "@/app/types/cards";
import { addressValue } from "@/app/types/inputs";
import { ConnectSoket } from "@/app/sistema/context/socket";
import {useContextHiddent} from "@/app/sistema/context/hiddeNav";
import Info from "./component/info/info";
import { newExitVistor } from "./helper/outSideVistor/outsideVistor";
import SetAddressOfVistor from "./component/renderAddress/renderAddress";
import Loading from "@/app/sistema/components/takePhoto/component/loading/loading";


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
  const [controll, setControll] = useState<'Exit'|'Enter' | ''>('');
 
  const setDisplayAddAddress = () => {
    setRenderAddAddress(!renderAddAddres);
  };


  const setAddAddress = (value: addressValue[]) => {
    setValueOfAddress(value)
   
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
    <>
    
    {controll?(
    <div className={style.bodyEnter}>
      {renderAddAddres && (
      <SetAddressOfVistor
      cards={cards}
      getAdress={setAddAddress}
      Display={setDisplayAddAddress}
     />
      )}
     
    <div className={style.move}>
        <Cadastros
          children={
            <>
            <Info
            cards={cards}
            />
            </>
          }
          Onclik={(()=>{
            handleExitVistor()
           })}
          header="cadastro de visitantes"
          SelectButton={controll}
        />
      </div>
    </div>
    ):(
      <>
       <Loading/>
      </>
    )}
    
    </>
  );
}
