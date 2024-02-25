/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import on from "./style/style.module.css";
import Cadastros from "../../../../sistema/components/Form/cadastros";
import { Inputcpf } from "../../../../sistema/components/inputs/inputcpf/cpf";
import { UtilisInputs } from "@/app/utils/inputs/inputs";
import { InputName } from "../../../../sistema/components/inputs/inputname/name";
import { checkPasswordStrength } from "./helpers/helps";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import axios from "axios";
import dotenv from "dotenv";
import Swal from "sweetalert2";
import Head from "next/head";

dotenv.config();
const urlClient = process.env.NEXT_PUBLIC_URL_CLIENT;
const urlBase = process.env.NEXT_PUBLIC_URL_BASE;

export default function PortariaCadastro() {
  const router = useRouter();
  const [inputs, setInputs] = useState(UtilisInputs);
  const [scores, setScores] = useState({ score: 0, texts: "" });

  const setValueOfCpf = (cpf: string) => {
    setInputs({ ...inputs, cpf });
  };

  const setValueOfName = (name: string) => {
    setInputs({ ...inputs, name });
  };

  const signUp = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const password = ev.target.value;
    setInputs({ ...inputs, password });
  };

  const fetch = () => {
    const containsLetters = /[a-zA-Z]/.test(inputs.password);
    const containsNumbers = /\d/.test(inputs.password);
    const containsSpecialCharacters = /[!@#$%*]/.test(inputs.password);
    const isValidPassword =
      containsLetters && containsNumbers && containsSpecialCharacters;
    const verifque = isValidPassword && scores.score > 2;

    if (!verifque) {
      setScores({
        ...scores,
        texts: "deve contem letras, numeros , caracteris e ser forte ",
      });
      return false;
    } else {
      return true;
    }
  };

  const Request = async () => {
    try {
      const response = await axios.post(`${urlBase}`, {
        name: inputs.name,
        cpf: inputs.cpf,
        password: inputs.password,
      });
      console.log(response.status);
      if (response.status === 200) {
        setInputs({ ...inputs, password: "", name: "", cpf: "" });
        return router.push(`${urlClient}/portaria/login`);
      }
    } catch (err) {
      setInputs({ ...inputs, password: "", name: "", cpf: "" });
      if (err instanceof AxiosError) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data,
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "erro desconhecido",
          showConfirmButton: true,
        });
      }
    }
  };

  return (
    <div className={on.portBody}>
      <div className={on.port}>
        <Cadastros
          children={
            <>
              <InputName getValueOfName={setValueOfName} />
              <Inputcpf getValueOfCpf={setValueOfCpf} update={inputs.cpf} />
              <div className={on.password}>
                <input
                  type="password"
                  placeholder="senha"
                  onChange={(ev) => signUp(ev)}
                  value={inputs.password}
                />
                <div className={on.text}>
                  <span>{scores.texts}</span>
                </div>
              </div>
            </>
          }
          Onclik={Request}
          header="cadastro de porteiro"
          SelectButton="3"
        />
      </div>
    </div>
  );
}
