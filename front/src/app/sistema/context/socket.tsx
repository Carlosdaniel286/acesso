/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';
import { io ,Socket} from "socket.io-client";
import dotenv from 'dotenv';
dotenv.config();
const urlBase = process.env.NEXT_PUBLIC_URL_BASE as string
interface SocketContextProps {
    socket: Socket | undefined
  }

export const Sockets =  createContext<SocketContextProps | undefined>(undefined);
 
export default function SocketProvider({children}: {children: React.ReactNode}) {
const [socket, setSocket] = useState<Socket>();
const [isConnect, setIsConnect] = useState<boolean>(false);

useEffect(()=>{
    const newsocket = io(`${urlBase}`,{
      withCredentials:true
    });
    setSocket(newsocket)
    setIsConnect(true)
  
   return () => {
    if(!socket) return
    socket.disconnect();
    setSocket(undefined);
    setIsConnect(false);
  };
},[])

useEffect(()=>{
    if(!socket) return
    if(isConnect){
    socket.on("connect", () => {
      
      });
    } 
  
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