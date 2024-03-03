/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import {  Dispatch, ReactNode, RefObject, SetStateAction, createContext, useContext, useEffect, useRef, useState } from "react"

export interface UserContextProps {
    stream: MediaStream | null
    setStream: Dispatch<SetStateAction<MediaStream | null>>
    activeStream: boolean
    setActiveStream: Dispatch<SetStateAction<boolean>>
    videoRef: RefObject<HTMLVideoElement>
}


const UserContextStream = createContext<UserContextProps | undefined>(undefined);

export const UserProviderStream=({ children }:{children:ReactNode}) => {
 const videoRef = useRef<HTMLVideoElement>(null);
 const [stream, setStream] = useState<MediaStream | null>(null);
 const [activeStream, setActiveStream] = useState<boolean>(false);
 const contextValue: UserContextProps = {
        stream,
        setStream,
        activeStream,
        setActiveStream,
        videoRef
    }
 
    useEffect(() =>{
       
        async function mediaDevices(){
          try{
            const stream = await navigator.mediaDevices.getUserMedia({video:true});
            setStream(stream)
          }catch(err){
              console.log(err)
              return null
          }
      }
      function cleanup() {
        if (stream) {
          stream.getTracks().forEach((marck) => {
            console.log(marck.id)
           marck.stop();
          });
        }
      }
   if(activeStream){
        mediaDevices()
   }
     return cleanup()
    
    },[activeStream])
   
    useEffect(() => {
        if (stream && videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, [stream]);
   
    return(
    <UserContextStream.Provider value={contextValue}>
        {children}
    </UserContextStream.Provider>
        )
  
}


export const useContextStream = () => {
    const context =useContext(UserContextStream);
  
    if (!context) {
      throw new Error('Stream fora do conexto');
    }
  
    return context;
  };
  