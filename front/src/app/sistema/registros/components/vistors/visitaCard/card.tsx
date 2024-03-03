/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import on from "./style/card.module.css";
import IconeUser from "../newEnter/component/icones/iconeUser";
import Image from "next/image";
import { project } from "@/app/types/form";
import IconeCod from "../newEnter/component/icones/iconeCod";
import { useEffect, useState } from "react";
import { ConnectSoket } from "@/app/sistema/context/socket";
import { useContextHiddent } from "@/app/sistema/context/hiddeNav";

type typeOfCards ={
  cards:project,
  setChanger:(()=>void)
}

export default function CardVisita({cards,setChanger}:typeOfCards) {
  const { socket } = ConnectSoket();
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  return (
    <div className={on.bodyVisit}>
      <div className={on.person}>
        <div className={on.visitimg}>
          <Image
            src={"/user.jpg"}
            alt="Descrição da imagem"
            width={100}
            height={100}
            style={{ borderRadius: "50%" ,cursor:'pointer'}}
            
          />
        </div>
        <div className={on.content}>
          <ul>
            <li><IconeUser/> {cards.name}</li>
            <li><IconeCod/> {cards.id}</li>
             
          </ul>
        </div>
      </div>
      <div className={on.button}>
        <button className={on.info}
          onClick={(()=>{
            if(!socket) return
            socket.emit('cache',cards.id)
            setChanger()
            setHiddeNav({ ...hiddeNav, overflow: !hiddeNav.overflow });
           
          })}
        >info</button>
      </div>
    </div>
  );
}
