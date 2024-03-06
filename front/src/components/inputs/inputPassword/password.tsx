/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import on from "./style/style.module.css";
export type passwords ={
  getValueOfPassword:((passwords:string)=>void)
}
export default function InputPassword({getValueOfPassword}:passwords) {
 const[password ,setPassword] =useState('')
  
  useEffect(()=>{
  getValueOfPassword(password)
  },[password])
 
 const signUp = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const password = ev.target.value; // Assuming signIn is an object with a password property
    setPassword(password)
  };

  return (
    <>
      <div className={on.password}>
        <input
          type="password"
          placeholder="senha"
          onChange={(ev) => signUp(ev)}
          value={password}
        />
      </div>
    </>
  );
}
