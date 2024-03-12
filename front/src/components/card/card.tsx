/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import on from "./style/card.module.css";
import IconeUser from "../icones/iconeUser";
import Image from "next/image";
import { project } from "@/types/form";
import IconeCod from "../icones/iconeCod";
import { useContextHiddent } from "@/context/hiddeNav";
import axios from "axios";
import dotenv from 'dotenv'
import { ConnectSoket } from "@/context/socket";
import { useEffect, useState } from "react";
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string

type typeOfCards ={
  cards:project,
  setChanger:(()=>void)
}

export default function Card({cards,setChanger}:typeOfCards) {
 const {socket}=ConnectSoket()
  const[src , setImageSrc]= useState("/user.jpg")
  useEffect(()=>{
    if(cards.image!==''){
    setImageSrc(cards.image)
    }
  },[])

  useEffect(()=>{
   console.log(cards.image)
  },[cards.image])
 
 
 const { setHiddeNav, hiddeNav } = useContextHiddent();
  return (
    <div className={on.bodyVisit}>
      <div className={on.person}>
        <div className={on.visitimg}>
          
          <Image
            src={src}
            alt="Descrição da imagem"
            width={100}
            height={100}
            style={{ borderRadius: "50%" ,cursor:'pointer'}}
            key={cards.id}
          />
        </div>
        <div className={on.content}>
          <ul>
           <li> {cards.name}</li>
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
