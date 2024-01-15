/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import on from "./style/style.module.css";
import { redirect } from "next/navigation";
import Cadastros from "../../components/Form/cadastros";
import { Inputcpf } from "../../components/inputcpf/cpf";
import { useUser } from "../../context/contetx";
import { InputName } from "../../components/inputname/name";
import { checkPasswordStrength } from "./helps/helps";
import { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const urlClient = process.env.NEXT_PUBLIC_URL_CLIENT;
const urlBase = process.env.NEXT_PUBLIC_URL_BASE
export default function PortariaCadastro() {
  const { inputs, setInputs } = useUser();
  const [scores, setScores] = useState({
    score: 0,
    texts: "",
  });
  const [status, setSatus] = useState(0);

  const signUp = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const password = ev.target.value;
    // Assuming signIn is an object with a password property
    const result = checkPasswordStrength(password);
    setScores({ ...scores, texts: result.text, score: result.score });
    if (password == "") setScores({ ...scores, texts: "" });
    setInputs({ ...inputs, password });
  };

  useEffect(() => {
    if (status === 200) {
      setInputs({ ...inputs, name: "", password: "", cpf: "" });
      redirect(`${urlClient}/sistema/portaria/login`)
    }
  }, [status]);

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
    const retuns = fetch();
    if (!retuns) return;

    const response = await axios.post(`${urlBase}`, {
      name: inputs.name,
      cpf: inputs.cpf,
      password: inputs.password,
    });
    setSatus(response.status);
  };
  return (
    <div className={on.portBody}>
      <div className={on.port}>
        <Cadastros
          // eslint-disable-next-line react/no-children-prop
          children={
            <>
              <InputName text="name" />
              <Inputcpf />

              <div className={on.password}>
                <input
                  type="password"
                  placeholder="deve contem letras, numeros , caracteris e ser forte"
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
