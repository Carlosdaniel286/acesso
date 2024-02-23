/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import style from "./style/search.module.css";
import { ConnectSoket } from "@/app/sistema/context/socket";
import { useEffect, useState } from "react";
import { InputName } from "@/app/sistema/components/inputs/inputname/name";
import { Inputcpf } from "@/app/sistema/components/inputs/inputcpf/cpf";
import { useChangeInput } from "@/app/sistema/context/changeInputs";
import { handleCodigo } from "./help/help";
import { FillterThis } from "./help/fillter";
import { UtilisInputs } from "@/app/utils/inputs/inputs";

export default function Seach() {
  const [input, setInput] = useState("");
  const { socket } = ConnectSoket();
  const { changeInput } = useChangeInput();
  const [inputs ,setInputs]=useState(UtilisInputs)
  
  const setValueOfCpf =(cpf:string)=>{
    setInputs({...inputs,cpf})
   }
   const setValueOfName =(name:string)=>{
     setInputs({...inputs,name})
   }
   useEffect(() => {
    FillterThis(socket, input, inputs);
  }, [inputs.name, inputs.cpf, input, changeInput]);

 return (
    <div className={style.serachbody}>
      {changeInput === "cpf" && <Inputcpf 
      getValueOfCpf={setValueOfCpf}
      />}
      {changeInput === "nome" && 
      <InputName 
      getValueOfName={setValueOfName} />}
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
