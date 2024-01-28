/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import on from "../scroll/style/scroll.module.css";
import Card from "../vistors/visitaCard/card";
import { useVisitors } from "@/app/sistema/context/visitors";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
import { ConnectSoket } from "@/app/sistema/context/socket";
import { project } from "@/app/types/form";
import Entry from "../vistors/newEnter/main";
import { useContextHiddent } from "@/app/sistema/context/hiddeNav";
import { useChangeInput } from "@/app/sistema/context/changeInputs";

export default function Scroll() {
  const { socket } = ConnectSoket();
  const { visitors, setVisitors } = useVisitors();
  const [changer, setChanger] = useState({
    name: "",
    id: 1,
    cpf: "",
    license: "",
    User: {
      name: "",
    },
  });
  const { setChangeInput } = useChangeInput();
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  useEffect(() => {
    console.log(visitors);
  }, [visitors]);

  useEffect(() => {
    if (socket) {
      socket.emit("getvisitor", "");
      socket.on("getvisitors", (msg: project[] | []) => {
        console.log(msg);
        setVisitors([...msg]);
      });
    }
  }, [socket]);

  useEffect(() => {
    console.log(changer);
  }, [changer]);

  return (
    <div className={on.bodyon}>
      <div className={on.scroll}>
        {visitors &&
          visitors.map((item) => (
            <div
              onClick={() => {
                setChangeInput(null);
                console.log(item.name);
                setHiddeNav({ ...hiddeNav, overflow: !hiddeNav.overflow });
                setChanger({
                  ...changer,
                  name: item.name,
                  id: item.id,
                  cpf: item.cpf,
                  license: item.license,
                  User:item.User
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
