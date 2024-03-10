"use client";
import { useEffect, useState } from "react";
import on from "./style.module.css";
import Link from "next/link";
import { CadastrosProps } from "@/types/cadastros";
import dotenv from "dotenv";
import { useContextHiddent } from "@/context/hiddeNav";
dotenv.config();
const urlBaseClient = process.env.NEXT_PUBLIC_URL_CLIENT;

export default function Form ({
  children,
  Onclik,
  header,
  SelectButton,
}: CadastrosProps) {
  const [value, setValue] = useState("");
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  const [heightSubmit, setHeightSubmit] = useState(20);

  useEffect(() => {
    if (SelectButton === "Enter" || SelectButton === "Exit") {
      setValue("X");
    }
    if (SelectButton === "1" || SelectButton === "3") {
      setHeightSubmit(30);
    }
  }, [SelectButton]);

  return (
    <div className={on.Cadbody}>
      <main>
     <div className={on.form}>
          <div className={on.value}>
                <button className={on.value_button} 
                  onClick={() =>
                  setHiddeNav({ ...hiddeNav, modal: false, overflow: false })
                     }
                >{value}</button>
              </div>
        <header>
            <h1>{header}</h1>
          </header>
          {children}
          <div style={{ height: `${heightSubmit}%` }} className={on.submit}>
            {SelectButton === "1" && (
              <>
                <button className={on.loginButton} onClick={Onclik}>
                  {"click para entrar"}
                </button>
                <span className={on.CadastroButton}>
                  <Link id={on.Link} href={`${urlBaseClient}/portaria/cadastro`}>
                    cadastro
                  </Link>
                </span>
              </>
            )}
            {SelectButton === "Enter" && (
              <>
                <button className={on.loginButton4} onClick={Onclik}>
                  {"entrar"}
                </button>
               
              </>
            )}
            {SelectButton === "Exit" && (
              <>
                <button className={on.loginButtonExit} onClick={Onclik}>
                  {"saida"}
                </button>
                <div
                  className={on.value}
                  onClick={() =>
                    setHiddeNav({ ...hiddeNav, modal: false, overflow: false })
                  }
                >
                  <button className={on.value_button}>{value}</button>
                </div>
              </>
            )}
            {SelectButton === "2" && (
              <button className={on.CadastroButton}>
                <Link id={on.Link}  href={`/`}>
                  ja tenho conta
                </Link>
              </button>
            )}
            {SelectButton === "3" && (
              <>
                <button className={on.loginButton} onClick={Onclik}>
                  {"enviar"}
                </button>
                <span className={on.CadastroButton}>
                  <Link id={on.Link}  href={`/`}>
                    ja tenho conta
                  </Link>
                </span>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
