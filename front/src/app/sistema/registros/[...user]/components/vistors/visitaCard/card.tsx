/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import on from "./style/card.module.css";
import { card } from "@/app/types/cards";
import Image from "next/image";
import NewEntry from "../newEnter/component/newEnter";
import { useEffect, useState } from "react";
import { useContextHiddent } from "@/app/sistema/context/hiddeNav";
import { useChangeInput } from "@/app/sistema/context/changeInputs";

import { project } from "@/app/types/form";

export default function CardVisita({ name, id, cpf, User, license }: project) {
  const { setChangeInput } = useChangeInput();
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  useEffect(()=>{
  //console.log(User)
  },[User])
  return (
    <div className={on.bodyVisit}>
      <div className={on.person}>
        <div className={on.visitimg}>
          <Image
            src={"/user.jpg"}
            alt="Descrição da imagem"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className={on.content}>
          <ul>
            <li>nome: {name}</li>
            <li>cpf: {cpf}</li>
            <li>codigo: {id}</li>
            <li className={on.linone}>atendente: {User.name}</li>
          </ul>
        </div>
      </div>
      <div className={on.button}>
        <button className={on.info}>info</button>
      </div>
    </div>
  );
}
