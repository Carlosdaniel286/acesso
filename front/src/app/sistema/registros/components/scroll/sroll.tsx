/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import on from "../scroll/style/scroll.module.css";
import Card from "../vistors/visitaCard/card";
import { useVisitors } from "@/app/sistema/context/visitors";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
import { ConnectSoket } from "@/app/sistema/context/socket";
import { project} from "@/app/types/form";
import Entry from "../vistors/newEnter/main";
import { useContextHiddent } from "@/app/sistema/context/hiddeNav";
import { HandlerChanger } from "@/app/utils/changer/changer";


type scroll ={
  DiplayInfo:'default'| (()=>void)
}

export default function Scroll({DiplayInfo}:scroll) {
  const { socket } = ConnectSoket();
  const { visitors, setVisitors } = useVisitors();
  const [changer, setChanger] = useState(HandlerChanger);
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  
  useEffect(() => {
    if (socket) {
      if(DiplayInfo=='default'){
        socket.emit("getvisitor", "");
      }else{
        DiplayInfo()
      }
      socket.on("getvisitors", (msg: project[] | [] ) => {
          setVisitors([...msg])
          });
    
    }
  }, [socket]);



  return (
    <div className={on.bodyon}>
      <div className={on.scroll}>
     
        {visitors &&
          visitors.map((item,id) => (
            <div
             onClick={() => {
               setHiddeNav({ ...hiddeNav, overflow: !hiddeNav.overflow });
                setChanger({
                  ...changer,
                  name: item.name,
                  id: item.id,
                  cpf: item.cpf,
                  license: item.license,
                  User:item.User,
                  inside:item.inside,
                  
                });
              }}
              key={item.id}
              className={on.cards}
            >
              <Card
                name={item.name}
                id={item.id}
                cpf={item.cpf}
                license={item.license}
                User={item.User}
                inside={item.inside}
              />
            </div>
          ))}
        <div>
          {
            <>
             { hiddeNav.overflow && changer.name && 
             <Entry
              cards={changer}
              
             />
             
             }
            </>
          }
        </div>
      </div>
    </div>
  );
}
