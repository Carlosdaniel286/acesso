/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Socket } from "socket.io-client";
import { Inputs } from "@/app/types/inputs";
import { project } from "@/app/types/form";
export const FillterThis=(
    socket: Socket | undefined ,
    codes:string,
    inputs:Inputs,
    
    )=>{
        
    if(inputs.name=='' && inputs.cpf=='' && inputs.cnh=='') {
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
