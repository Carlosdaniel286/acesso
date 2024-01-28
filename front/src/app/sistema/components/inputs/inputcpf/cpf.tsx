/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
export type cpf ={
  getValueOfCpf:((cpf:string)=>void)
}

export const Inputcpf = ({getValueOfCpf}:cpf) => {
 
  const [cpf, setCpfs]=useState('')
  
   useEffect(()=>{
   getValueOfCpf(cpf)
   },[cpf])
  
  
   const setCpf = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let keys = ev.target.value.split("");
    const limit = keys.length;
    const last = keys[keys.length - 1];
    const regex = /^[.-]+$/;
    const ponto = regex.test(last);
    
    if (!isNaN(Number(last)) || last === "0" || last === undefined) {
      if (limit > 14) return;
      if (limit === 4) {
        keys = [cpf, ".", last];
      }
      if (limit === 8) {
        keys = [cpf, ".", last];
      }
      if (limit === 12) {
        keys = [cpf, "-", last];
      }
      const cpfFormat = keys.join("") 
      setCpfs(cpfFormat)
    } else if (ponto) {
      const newarry = cpf.split("");
      newarry.pop();
      const cpfFormat =  newarry.join("") 
      setCpfs(cpfFormat)
      
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="cpf"
        onChange={(ev) => setCpf(ev)}
        value={cpf}
      />
    </>
  );
};
