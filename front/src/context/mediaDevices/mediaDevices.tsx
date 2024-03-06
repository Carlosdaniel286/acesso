/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import {  Dispatch, MutableRefObject, ReactNode, RefObject, SetStateAction, createContext, useContext, useEffect, useRef, useState } from "react"

export interface UserContextProps {
    stream: MediaStream | null
    setStream: Dispatch<SetStateAction<MediaStream | null>>
    activeStream: boolean
    setActiveStream: Dispatch<SetStateAction<boolean>>
    videoRef: MutableRefObject<HTMLVideoElement | null>
    setPhoto: Dispatch<SetStateAction<FormData | null>>
    photo: FormData | null
    imageSrc: string | null
    setImageSrc: Dispatch<SetStateAction<string | null>>
}


const UserContextStream = createContext<UserContextProps | undefined>(undefined);

export const UserProviderStream=({ children }:{children:ReactNode}) => {
 const videoRef = useRef<HTMLVideoElement | null>(null);
 const [stream, setStream] = useState<MediaStream | null>(null);
 const [activeStream, setActiveStream] = useState<boolean>(false);
 const [photo, setPhoto] = useState<FormData | null>(null);
 const [imageSrc, setImageSrc] = useState<string | null>(null);
 
 
 const contextValue: UserContextProps = {
        stream,
        setStream,
        activeStream,
        setActiveStream,
        videoRef,
        photo,
        setPhoto,
        setImageSrc,
        imageSrc
    }
 
    useEffect(() =>{
       
        async function mediaDevices(){
          try{
            //const stream = await navigator.mediaDevices.getUserMedia({video:true});
            //setStream(stream)
          }catch(err){
              console.log(err)
              return null
          }
      }
      function cleanup(stream:MediaStream) {
        if (stream) {
          stream.getTracks().forEach((marck) => {
            console.log(marck.id)
           marck.stop();
          });
        }
      }
   
     return
    
    },[stream])
   
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
  