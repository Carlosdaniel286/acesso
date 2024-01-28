"use client";
import on from "./style.module.css";
import Cadastros from "../../components/Form/cadastros";
import { Inputcpf } from "../../components/inputs/inputcpf/cpf";
import InputPassword from "../../components/inputs/inputPassword/password";
import axios from "axios";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
import { useState } from "react";
import { UtilisInputs } from "@/app/utils/inputs/inputs";
dotenv.config();
const UrlCient = process.env.NEXT_PUBLIC_URL_CLIENT;

export default function Login() {
  const [inputs ,setInputs]=useState(UtilisInputs)
  const router = useRouter();
  const setValueOfCpf =(cpf:string)=>{
    setInputs({...inputs,cpf})
   }
   const setValueOfPassworld =(password:string)=>{
     setInputs({...inputs,password})
   }
 
 
  const Request = async () => {
    const response = await axios.post("/routes/login", {
      cpf: inputs.cpf,
      password: inputs.password,
    });

    const name = response.data;
    if (response.status === 200)
      setInputs({ ...inputs, name: "", password: "", cpf: "" });
    router.push(`${UrlCient}/sistema/registros/${name}`);
  };

  return (
    <div className={on.Loginbody}>
      <div className={on.login}>
        <Cadastros
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <Inputcpf 
               getValueOfCpf={setValueOfCpf}
              />

              <InputPassword 
               getValueOfPassword={setValueOfPassworld}
              />
              
            </>
          }
          Onclik={Request}
          header="login"
          SelectButton="1"
        />
      </div>
    </div>
  );
}
