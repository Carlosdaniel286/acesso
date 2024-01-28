/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import on from "./style.module.css";
import Cadastros from "../../../Form/cadastros";
import { Inputcpf } from "../../../inputs/inputcpf/cpf";
import { InputCnh } from "../../../inputs/inputCnh/cnh";
import { InputName } from "../../../inputs/inputname/name";

import { InputAdressMain } from "../../../inputs/inputadress/mainAddress";
import { useVisitors } from "@/app/sistema/context/visitors";
import { ConnectSoket } from "@/app/sistema/context/socket";
import { project, Props } from "@/app/types/form";
import { useEffect, useState } from "react";
import { useChangeInput } from "@/app/sistema/context/changeInputs";
import { useContextHiddent } from "@/app/sistema/context/hiddeNav";
import { addressValue, Inputs } from "@/app/types/inputs";
import { UtilisInputs } from "@/app/utils/inputs/inputs";

export default function VisitaCadastros({ setHidden }: Props) {
  const { setVisitors } = useVisitors();
  const { socket } = ConnectSoket();
  const { setChangeInput } = useChangeInput();
  const {setHiddeNav,hiddeNav} = useContextHiddent()
const [inputs, setInputs]=useState(UtilisInputs)
  
const setValueOfAddress=(value:addressValue[])=>{
  setInputs({...inputs,address:value})
  
  }
  const setValueOfCnh=(cnh:string)=>{
    setInputs({...inputs,cnh})
}
const setValueOfCpf=(cpf:string)=>{
  setInputs({...inputs,cpf})
}
const setValueOfName=(name:string)=>{
  setInputs({...inputs,name})
}
  
  const Requests = async () => {
    setHidden(false);
    console.log(inputs)
    //setChangeInput("nome");
    if (socket) {
      //visitors
      socket.emit("visitors", {
        name: inputs.name,
        cpf: inputs.cpf,
        cnh: inputs.cnh,
        address: inputs.address,
      });
    }
    setInputs({
      ...inputs,
      name: "",
     
      cpf: "",
      address: [{ lt: '', qd: ''}],
      
    });
    setHiddeNav({...hiddeNav,modal:true})
  };
  

  useEffect(() => {
   setChangeInput(null);
    if (!socket) return;
    socket.on("getvisitors", (msg: project[]) => {
      console.log(msg);
      setVisitors([...msg]);
    });
   
  }, []);

  return (
    <div className={on.Cadbodys}>
      <div className={on.main}>
        <Cadastros
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <InputName getValueOfName={setValueOfName}/>
              <Inputcpf 
              getValueOfCpf={setValueOfCpf}
              />
              <InputAdressMain
              setValueOfAddress={setValueOfAddress}
              />
              <InputCnh 
              getValueOfCnh={setValueOfCnh}
              />
            </>
          }
          Onclik={Requests}
          header="cadastro de vistantes"
          SelectButton="1"
        />
      </div>
    </div>
  );
}
