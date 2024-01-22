/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import style from "./style/search.module.css";
import { ConnectSoket } from "@/app/sistema/context/socket";
import { useVisitors } from "@/app/sistema/context/visitors";
import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { InputName } from "@/app/sistema/components/inputs/inputname/name";
import { Inputcpf } from "@/app/sistema/components/inputs/inputcpf/cpf";
import { useChangeInput } from "@/app/sistema/context/changeInputs";
import { useUser } from "@/app/sistema/context/contetx";
import { handleCodigo } from "./help/help";
import { FillterThis } from "./help/fillter";

export default function Seach() {
  const [input, setInput] = useState("");
  const { socket } = ConnectSoket();
  const { changeInput } = useChangeInput();
  const { inputs } = useUser();
  useEffect(() => {
    if (changeInput == null) return;
    console.log(changeInput);
    FillterThis(socket, input, inputs);
  }, [inputs.name, inputs.cpf, input, changeInput]);

  return (
    <div className={style.serachbody}>
      {changeInput === "cpf" && <Inputcpf />}
      {changeInput === "nome" && <InputName text="digite um nome" />}
      {changeInput === "codigo" && (
        <>
          <input
            type="text"
            placeholder="codigo"
            value={input}
            onChange={(ev) => handleCodigo({ ev: ev.target.value, setInput })}
          />
        </>
      )}
    </div>
  );
}
