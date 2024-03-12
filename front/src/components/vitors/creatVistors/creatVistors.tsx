/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Cadastros from "../../Form/form";
import on from "./style.module.css";
import { Inputcpf } from "../../inputs/inputcpf/cpf";
import { InputCnh } from "../../inputs/inputCnh/cnh";
import { InputName } from "../../inputs/inputname/name";
import {Props } from "@/types/form";
import {  useState } from "react";
import AddAddress from "../renderAddAddress/addAdress/addAdress";
import TakePhoto from "../../takePhoto/takePhoto";
import { useContextStream } from "@/context/mediaDevices/mediaDevices";
import Image from "next/image";
import { useMediaDevices } from "@/hooks/initVideo/stream";
import { submitPhoto } from "@/hooks/submitPhoto/sendPhoto";
import InputPhone from "@/components/inputs/inputPhone/inputPhone";
export default function creatVisitors({ setHidden }: Props) {
  const [diplayAddAddress, setdiplayAddAddress] = useState(false);
  const [displayTakePhoto, setDisplayTakePhoto] = useState(false);
  const {  imageSrc } = useContextStream();
  const { initCamera } = useMediaDevices();
  const {
    handleSubmit,
    setValueOfAddress,
    setValueOfCpf,setValueOfName,
    setValueOfCnh,}=submitPhoto({
      setHiddenSubmitPhoto:((ev) =>{setHidden(ev)}) 
    })

  
  return (
    <>
    <div className={on.Cadbodys}>
      <div className={on.main}>
        <Cadastros
          children={
            <>
            <div className={on.cad_inputs}>
             
              {displayTakePhoto && (
                <TakePhoto
                   setDisplay={(ev: boolean) => {
                    setDisplayTakePhoto(ev);
                  }}
                />
              )}
              <div className={on.content_inputs} >
             <InputName getValueOfName={setValueOfName} />
              <Inputcpf getValueOfCpf={setValueOfCpf} />
              </div>
             
              <div className={on.addAdress_main}>
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
              <div className={on.content_inputs} >
              <InputCnh getValueOfCnh={setValueOfCnh} />
              <InputPhone/>
              </div>
              
              <div className={on.contanier_Picture}>
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    width={80}
                    height={80}
                    alt=""
                    style={{ borderRadius: "50%" }}
                    onClick={async () => {
                      await initCamera();
                      setDisplayTakePhoto(true);
                    }}
                  />
                )}
              </div>
              {!imageSrc && 
              <div className={on.contanier_AddPic}>
                <button
                  className={on.button_AddPic}
                  onClick={async () => {
                    await initCamera();
                    setDisplayTakePhoto(true);
                  }}
                >
                  Adicionar foto
                </button>
              </div>
           }
            </div>
            </>
          }
          Onclik={() => {
            setdiplayAddAddress(!diplayAddAddress);
          }}
          header="Cadastro de visitantes"
          SelectButton="Enter"
        />
      </div>
    </div>
    </>
  );
}


