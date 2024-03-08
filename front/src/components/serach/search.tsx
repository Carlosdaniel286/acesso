/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import style from "./style/search.module.css";
//import { ConnectSoket } from "@/app/sistema/context/socket";
import { useEffect, useState } from "react";
import { InputName } from "@/components/inputs/inputname/name";
import { Inputcpf } from "@/components/inputs/inputcpf/cpf";
import { useChangeInput } from "@/context/changeInputs";
import { handleCodigo } from "./help/help";
import { FillterThis } from "./help/fillter";
import { UtilisInputs } from "@/app/utils/inputs/inputs";
import { useVisitors } from "@/context/visitors";
import { project } from "@/app/types/form";
export default function Seach() {
  const [input, setInput] = useState("");
  const { changeInput } = useChangeInput();
  const [inputs, setInputs] = useState(UtilisInputs);
  const {setVisitors,visitors}=useVisitors()
  
  const updateVistors =(project:project[])=>{
     setVisitors(project)
  }
  
  
  
  const setValueOfCpf = (cpf: string) => {
    setInputs({ ...inputs, cpf });
  };
  const setValueOfName = (name: string) => {
    setInputs({ ...inputs, name });
  };
  useEffect(() => {
    FillterThis(input, inputs,updateVistors);
  }, [inputs.name, inputs.cpf, input, changeInput]);

  return (
    <div className={style.serachbody}>
      {changeInput === "cpf" && <Inputcpf getValueOfCpf={setValueOfCpf} />}
      {changeInput === "nome" && <InputName getValueOfName={setValueOfName} />}
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
