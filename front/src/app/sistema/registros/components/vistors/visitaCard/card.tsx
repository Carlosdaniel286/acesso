/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import on from "./style/card.module.css";
import IconeUser from "../newEnter/component/icones/iconeUser";
import IconeDrive from "../newEnter/component/icones/iconeDrive";
import Image from "next/image";
import { project } from "@/app/types/form";
import IconeCod from "../newEnter/component/icones/iconeCod";
import IconeAttend from "../newEnter/component/icones/iconeAttend";
export default function CardVisita({ name, id, User, license }: project) {
 
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
            <li><IconeUser/> {name}</li>
            <li><IconeCod/> {id}</li>
             
          </ul>
        </div>
      </div>
      <div className={on.button}>
        <button className={on.info}>info</button>
      </div>
    </div>
  );
}
