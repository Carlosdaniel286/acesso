"use client";
import on from "./style/style.module.css";
import Cadastros from "@/components/Form/form";
import { Inputcpf } from "@/components/inputs/inputcpf/cpf";
import InputPassword from "@/components/inputs/inputPassword/password";
import axios from "axios";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
import { useState } from "react";
import { UtilisInputs } from "@/utils/inputs/inputs";
import { AxiosError } from "axios";
import Swal from "sweetalert2";
import Head from "next/head";
//import { Metadata } from "next";
dotenv.config();

const UrlCient = process.env.NEXT_PUBLIC_URL_CLIENT;

export default function Login() {
  const [inputs, setInputs] = useState(UtilisInputs);
  const router = useRouter();

  const setValueOfCpf = (cpf: string) => {
    setInputs({ ...inputs, cpf });
  };
  const setValueOfPassworld = (password: string) => {
    setInputs({ ...inputs, password });
  };

  const Request = async () => {
    try {
      const response = await axios.post("/routes/login", {
        cpf: inputs.cpf,
        password: inputs.password,
      });

      if (response.status === 200) {
        const user = response.data;
        setInputs({ ...inputs, name: "", password: "", cpf: "" });
        router.push(`${UrlCient}/sistema/registros/todos/${user}`);
      }
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        //setResponse(err.response?.data)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data,
        });
      }
    }
  };

  return (
    <>
      <div className={on.Loginbody}>
        <div className={on.login}>
          <Cadastros
            // eslint-disable-next-line react/no-children-prop
            children={
              <>
                <div className={on.login_inputs}>
                  <Inputcpf getValueOfCpf={setValueOfCpf} />

                  <InputPassword getValueOfPassword={setValueOfPassworld} />
                </div>
              </>
            }
            Onclik={Request}
            header="login"
            SelectButton="1"
          />
        </div>
      </div>
    </>
  );
}
