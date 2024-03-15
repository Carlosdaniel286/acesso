import { UtilisInputs } from "@/utils/inputs/inputs";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContextStream } from "@/context/mediaDevices/mediaDevices";
import { project } from "@/types/form";
import { useVisitors } from "@/context/visitors";
import { AxiosError } from "axios";
import {useContextHiddent } from "@/context/hiddeNav";
import { handleProfilePhoto } from "./helpers/PhotoProfile/PhotoProfile";
import { handleEmptyPhoto } from "./helpers/EmptyPhotoVisitor/EmptyPhotoVisitor";
import { addressValue } from "@/types/inputs";

type props={
    setHiddenSubmitPhoto:((ev:boolean)=>void) | 'default'
}

export const submitPhoto = ({setHiddenSubmitPhoto}:props) => {
const [inputs,setInputs] = useState(UtilisInputs);

const{photo}=useContextStream()
const{setVisitors,visitors}=useVisitors()
const{setHiddeNav,hiddeNav}=useContextHiddent()

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
  const setValueOfPhone = (phone: string) => {
    setInputs({ ...inputs, phone });
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
      if (photo) {
        const response = await handleProfilePhoto(photo, inputs);
        if (!response) return;
        const newVisitor = response.data as project;
        console.log(newVisitor);
        setVisitors([...visitors, newVisitor]);
      }
      if (!photo) {
        const response = await handleEmptyPhoto(inputs);
        if (!response) return;
        const newVisitor = response.data as project;
        console.log(newVisitor);
        setVisitors([...visitors, newVisitor]);
      }
      setHiddeNav({ ...hiddeNav, modal: true });
      if(setHiddenSubmitPhoto!=='default'){
      setHiddenSubmitPhoto(false)
      setTimeout(() => {
        setHiddenSubmitPhoto(true)
      }, 1);
    }
    } catch (err) {
      console.log(err);
      const error = err as AxiosError;
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        showConfirmButton: true,
      });
    }
  }
  return{
    handleSubmit,
    setValueOfAddress,
    setValueOfCnh,
    setValueOfCpf,
    setValueOfName,
    setValueOfPhone,
  
  }
}
