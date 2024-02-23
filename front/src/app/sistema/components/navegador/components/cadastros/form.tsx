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
import { useContextHiddent } from "@/app/sistema/context/hiddeNav";
import { addressValue, Inputs } from "@/app/types/inputs";
import { UtilisInputs } from "@/app/utils/inputs/inputs";
import AddAddress from "@/app/sistema/registros/components/vistors/newEnter/component/addAdress/addAdress";
import Swal from "sweetalert2";

type ReponseSocket ={
  success: boolean, 
  message: string
}


export default function VisitaCadastros({ setHidden }: Props) {
  const { setVisitors } = useVisitors();
  const { socket } = ConnectSoket();
  const {setHiddeNav,hiddeNav} = useContextHiddent()
  const [inputs, setInputs]=useState(UtilisInputs)
  const [diplayAddAddress, setdiplayAddAddress]=useState(false)
  
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
  const filter = inputs.address.filter((item)=>{
   return item.lt!=='' && item.qd!==''
  })

  if(filter.length===0){
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Sem Endereço Para Adicionar ',
      showConfirmButton: true,
    });
    //setHidden(false)
    return; // Retorna da função se não houver endereço para adicionar
  }
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
      cpf: "",
      address: [{ lt: '', qd: ''}],
      
    });
   
  };
  
 useEffect(() => {
  
    if (!socket) return;
    socket.on("getvisitors", async(msg: project[]) => {
      setVisitors([...msg]);
     await Swal.fire({
        icon: 'success',
        title: 'Mensagem de Ok!',
        showConfirmButton: false,
        timer:600
        });
       //setHiddeNav({...hiddeNav,modal:true})
       //setHidden(false)
    });
    socket.on('error', async(err) => {
     await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        showConfirmButton: true,
      });
    });
   
  }, []);

  return (
    <div className={on.Cadbodys}>
      <div className={on.main}>
        <Cadastros
          // eslint-disable-next-line react/no-children-prop
          children={
            <div className={on.cad_inputs}>
              <InputName getValueOfName={setValueOfName}/>
              <Inputcpf 
              getValueOfCpf={setValueOfCpf}
              />
              <div className={on.addAdress_main}>
              {diplayAddAddress && <>
              <AddAddress
               getValueOfAddress={setValueOfAddress}
               setDisplayAddAddress={(()=>{setdiplayAddAddress(!diplayAddAddress)})}
               handleNewEnter={Requests}
              />
              </>}
              </div>
             <InputCnh 
              getValueOfCnh={setValueOfCnh}
              />
            </div>
          }
          Onclik={(()=>{setdiplayAddAddress(!diplayAddAddress)})}
          header="cadastro de vistantes"
          SelectButton="4"
        />
      </div>
    </div>
  );
}
