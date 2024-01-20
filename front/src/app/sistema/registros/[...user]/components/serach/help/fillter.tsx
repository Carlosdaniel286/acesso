/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Socket } from "socket.io-client";
import { Inputs } from "@/app/types/inputs";

export const FillterThis=(
    socket: Socket | undefined ,
    codes:string,
    inputs:Inputs
    )=>{
   console.log(codes)
    if(inputs.name=='' && inputs.cpf=='' && codes=='') {
        if(!socket) return
        socket.emit("getvisitor", "");
        return
    }
    if(!socket) return
       let code:Number |"" = 0
       const {cpf , name}=inputs
    if(codes=='') {
        code =""
    }else{
       code = Number(codes)
    }
    socket.emit("filltervisitor",{cpf , name , code})
   }
