import { Socket } from "socket.io-client";
import { addressValue } from "@/app/types/inputs";
import Swal from "sweetalert2";
import { project } from "@/app/types/form";
import { Dispatch, SetStateAction } from "react";
import { newEnters } from "../../CardVistorDetails";
import axios, { AxiosError } from "axios";
import dotenv from 'dotenv'
dotenv.config()
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string

type NewEnter = {
  valueOfAddress: addressValue[];
  cards: project;
  hiddeNav: {
    overflow: boolean;
    modal: boolean;
  };
  setHiddeNav: Dispatch<
    SetStateAction<{
      overflow: boolean;
      modal: boolean;
    }>
  >;
};

export const EnterVistor = async ({
  valueOfAddress,
  cards,
  setHiddeNav,
  hiddeNav,
}: NewEnter) => {
  const filterAddress = valueOfAddress.filter((item) => {
    return item.lt !== "" && item.qd !== "";
  });

  if (filterAddress.length === 0) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sem Endereço Para Adicionar ",
      showConfirmButton: true,
    });
    return;
  }
  const newVisitor: newEnters = {
    address: filterAddress,
    visitorId: cards.id,
  };
  "visitorsEnter"
  try {
  
          await axios.post( `${urlBase}/visitorsEnter`,newVisitor,{
            withCredentials:true
          })
          await Swal.fire({
            icon: "success",
            title: "ok",
            text: "ok",
            showConfirmButton: false,
            timer: 700,
          });
          setHiddeNav({ ...hiddeNav, overflow: false });
      } catch (err) {
    if (err instanceof AxiosError) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        showConfirmButton: true,
      });
      return;
    }
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "erro no servidor",
      showConfirmButton: true,
    });
    return;
  }
};
