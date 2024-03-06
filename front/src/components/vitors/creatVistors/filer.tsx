"use client";

import Cadastros from "../../Form/form";
import { Inputcpf } from "../../inputs/inputcpf/cpf";
import { InputCnh } from "../../inputs/inputCnh/cnh";
import { InputName } from "../../inputs/inputname/name";
import { InputAdressMain } from "../../inputs/inputadress/mainAddress";
import { useVisitors } from "@/context/visitors";
import { project, Props } from "@/app/types/form";
import { useEffect, useState } from "react";
import { useContextHiddent } from "@/context/hiddeNav";
import { addressValue, Inputs } from "@/app/types/inputs";
import { UtilisInputs } from "@/app/utils/inputs/inputs";
import AddAddress from "../renderAddAddress/addAdress/addAdress";
import Swal from "sweetalert2";
import axios, { AxiosError } from "axios";
import TakePhoto from "../../takePhoto/takePhoto";
import { useContextStream } from "@/context/mediaDevices/mediaDevices";
import Image from "next/image";
import dotenv from 'dotenv'
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string

export default function creatVisitors({ setHidden }: Props) {
  const { setVisitors ,visitors} = useVisitors();
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  const [inputs, setInputs] = useState(UtilisInputs);
  const [diplayAddAddress, setdiplayAddAddress] = useState(false);
  const [displayTakePhoto, setDisplayTakePhoto] = useState(false);
  const { photo, imageSrc } = useContextStream();

  useEffect(() => {
    console.log(photo);
  }, [photo]);

  const setValueOfAddress = (value: addressValue[]) => {
    setInputs({ ...inputs, address: value });
  };

  const setValueOfCnh = (cnh: string) => {
    setInputs({ ...inputs, cnh });
  };
  const setValueOfCpf = (cpf: string) => {
    setInputs({ ...inputs, cpf });
  };
  const setValueOfName = (name: string) => {
    setInputs({ ...inputs, name });
  };

  const handleSubmit = async () => {
    const filter = inputs.address.filter((item) => {
      return item.lt !== "" && item.qd !== "";
    });

    if (filter.length === 0) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sem Endereço Para Adicionar ",
        showConfirmButton: true,
      });
      return;
    }

    try {
     const response = await axios.post(`${urlBase}/creatVisitors`, {
        name: inputs.name,
        cpf: inputs.cpf,
        cnh: inputs.cnh,
        address: inputs.address,
        image: photo,
      });
       const newVisitor = response.data as project
      setVisitors([...visitors, newVisitor])
      setHiddeNav({ ...hiddeNav, modal: true });
      setHidden(false);
      setTimeout(() => {
        setHidden(true);
      }, 1);
    } catch (err) {
      const error = err as AxiosError
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <div >
      <div>
        <Cadastros
          children={
            <div>
              {displayTakePhoto && (
                <TakePhoto
                  urLink=""
                  setDisplay={(ev: boolean) => {
                    setDisplayTakePhoto(ev);
                  }}
                />
              )}

              <InputName getValueOfName={setValueOfName} />
              <Inputcpf getValueOfCpf={setValueOfCpf} />
              <div>
                {diplayAddAddress && (
                  <>
                    <AddAddress
                      getValueOfAddress={setValueOfAddress}
                      setDisplayAddAddress={() => {
                        setdiplayAddAddress(!diplayAddAddress);
                      }}
                      handleNewEnter={handleSubmit}
                    />
                  </>
                )}
              </div>
              <InputCnh getValueOfCnh={setValueOfCnh} />
              <div>
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    width={80}
                    height={80}
                    alt=""
                    style={{ borderRadius: "50%" }}
                    onClick={() => {
                      setDisplayTakePhoto(true);
                    }}
                  />
                )}
              </div>

              <div>
                <button
                  onClick={() => {
                    setDisplayTakePhoto(!displayTakePhoto);
                  }}
                >
                  Adicionar foto
                </button>
              </div>
            </div>
          }
          Onclik={() => {
            setdiplayAddAddress(!diplayAddAddress);
          }}
          header="Cadastro de visitantes"
          SelectButton="Enter"
        />
      </div>
    </div>
  );
}














//"creatVisitors"