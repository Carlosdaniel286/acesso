/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { io ,Socket} from "socket.io-client";
import { useRouter } from 'next/navigation';
import dotenv from 'dotenv';
import Swal from 'sweetalert2';
import { Manager } from "socket.io-client";
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string
interface SocketContextProps {
    socket: Socket | undefined
  }
 const Sockets =  createContext<SocketContextProps | undefined>(undefined);
 
export function SocketProvider({children}: {children: React.ReactNode}) {
const [socket, setSocket] = useState<Socket>();
const [isConnect, setIsConnect] = useState<boolean>(false);
const router = useRouter()

 function  handleDesconnect () {
   Swal.fire({
    icon: 'info',
    title: 'Oops...',
    text: 'Usuário Desconectado',
    showConfirmButton: true,
    timer:7000
  });
  return router.push('/')
  
} 

useEffect(()=>{
  try{
    const newsocket = io(`${urlBase}`,{
      withCredentials:true,
      autoConnect:true
    });
    setSocket(newsocket)
    setIsConnect(true)
    
    
   return () => {
    
    if(!socket) return
    socket.disconnect();
    setSocket(undefined);
    setIsConnect(false);
   
   
  }
}catch(err){
  alert(err)
}
},[])

useEffect(()=>{
    if(!socket) return 
    if(isConnect){
    socket.on("connect", () => {
      console.log('Conectado ao servidor Socket.io');
    });} 
   
     socket.on("disconnect",() => {
      //setTimeout( handleDesconnect, 30000);
     Swal.fire({
        icon: 'info',
        title: '...tentando Reconectar',
        text: 'Servidor fora do ar',
        showConfirmButton: false,
        //timer:30000
      });
     //CONNECT_ERROR
     socket.io.on("reconnect_attempt", (attempt) => {
      if(attempt===10){
       handleDesconnect()
      }
    });

     socket.on("error", (error) => {
      //console.log(error)
    });
    socket.io.on("reconnect", (attempt) => {
      Swal.fire({
        icon: 'success',
        title: 'reconectado',
        text: 'ok',
        showConfirmButton: true,
        timer:1000
      });
    
    });
  });
    
},[socket,isConnect])


  return (
      <Sockets.Provider value={{socket}}>
            {children}
       </Sockets.Provider>)
}


 export const ConnectSoket = () => {
    const context = useContext(Sockets);
  
    if (!context) {
      throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
  
    return context;
  };