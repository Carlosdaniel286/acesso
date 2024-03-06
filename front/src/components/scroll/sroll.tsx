/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */
//visitorsExit"

"use client";
import on from "../scroll/style/scroll.module.css";
import Card from "../card/card";
import { useVisitors } from "@/context/visitors";
import { useEffect, useState } from "react";
import axios from 'axios'; // Importe o Axios
import { project } from "@/app/types/form";
import Info from "../info/info";
import { useContextHiddent } from "@/context/hiddeNav";
import { HandlerChanger } from "@/app/utils/changer/changer";
import dotenv from 'dotenv'
import NewEntry from "../vitors/CardVistorDetails/CardVistorDetails";
import Overlay from "../overlay/hidden";
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string

type scroll = {
  DiplayInfo: "default" | (() => void);
};

export default function Scroll({ DiplayInfo }: scroll) {
  const { visitors, setVisitors } = useVisitors();
  const [changer, setChanger] = useState(HandlerChanger);
  const { hiddeNav } = useContextHiddent();

  useEffect(() => {
    async function fetchVisitors() {
      try {
        const response = await axios.get(`${urlBase}/getvisitor`,{
          withCredentials:true
        }); // Faz uma requisição GET para obter os visitantes
        
        setVisitors(response.data); // Atualiza o estado dos visitantes com os dados da resposta
      } catch (error) {
        console.error("Erro ao obter os visitantes:", error);
      }
    }

    if (DiplayInfo === "default") {
      fetchVisitors(); 
    } else {
      DiplayInfo();
    }
  }, []);

  return (
    <div className={on.bodyon}>
      <div className={on.scroll}>
        {visitors &&
          visitors.map((item) => (
            <div key={item.id} className={on.cards}>
              <Card
                cards={item}
                setChanger={() => {
                  setChanger({
                    ...changer,
                    name: item.name,
                    id: item.id,
                    cpf: item.cpf,
                    license: item.license,
                    user: item.user,
                    image: item.image,
                  });
                }}
              />
            </div>
          ))}
        <div>
          {
          hiddeNav.overflow && changer.name &&
          <Overlay  
          children={<>
          <NewEntry cards={changer} />
          </>}
          handleOverlayVisibility={'default'}
          />
           
          }
        </div>
      </div>
    </div>
  );
}
