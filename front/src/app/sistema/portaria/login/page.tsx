"use client";
import on from "./style.module.css";
import Cadastros from "../../components/Form/cadastros";
import Image from "next/image";
import { Inputcpf } from "../../components/inputcpf/cpf";
import InputPassword from "../../components/inputPassword/password";
import { useUser } from "../../context/contetx";
import axios from "axios";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();
const UrlCient = process.env.NEXT_PUBLIC_URL_CLIENT;

export default function Login() {
  const { inputs ,setInputs} = useUser();
  const router = useRouter();
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
              <Inputcpf />

              <InputPassword />
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
