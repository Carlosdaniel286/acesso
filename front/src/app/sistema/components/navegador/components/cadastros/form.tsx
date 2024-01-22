/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import on from "./style.module.css";
import Cadastros from "../../../Form/cadastros";
import { Inputcpf } from "../../../inputs/inputcpf/cpf";
import { InputCnh } from "../../../inputs/inputCnh/cnh";
import { InputName } from "../../../inputs/inputname/name";
import { useUser } from "@/app/sistema/context/contetx";
import { InputAdress } from "../../../inputs/inputadress/andress";
import { useVisitors } from "@/app/sistema/context/visitors";
import { ConnectSoket } from "@/app/sistema/context/socket";
import { project, Props } from "@/app/types/form";
import { useEffect } from "react";
import { useChangeInput } from "@/app/sistema/context/changeInputs";
import { useContextHiddent } from "@/app/sistema/context/hiddeNav";

export default function VisitaCadastros({ setHidden }: Props) {
  const { inputs, setInputs } = useUser();
  const { setVisitors } = useVisitors();
  const { socket } = ConnectSoket();
  const { setChangeInput } = useChangeInput();
  const {setHiddeNav} = useContextHiddent()
  
  const Requests = async () => {
    setHidden(false);
    setChangeInput("nome");
    if (socket) {
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
      password: "",
      cpf: "",
      address: { lt: '', qd: ''},
    });
    setHiddeNav(false)
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
              <InputName text="name" />
              <Inputcpf />

              <InputAdress />

              <InputCnh />
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
