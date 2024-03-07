

import { useContextStream} from "@/context/mediaDevices/mediaDevices";
import { useEffect, useState } from "react";
import style from "../style/addPicture.module.css";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import dontev from 'dotenv'
import Swal from "sweetalert2";
import { setTimeout } from "timers/promises";
import { mediaDevices } from "./helpers/newSteam/stream";
import { cleaStream } from "./helpers/cleanStream/cleanStream";
dontev.config()
export type renderTakePhoto={
  setDisplay:((ev:boolean)=>void)
  urLink :string
}

const backend = process.env.NEXT_PUBLIC_URL_BASE as string

export default function RenderPhoto({setDisplay,urLink}:renderTakePhoto){
  const {setActiveStream,videoRef,activeStream,setPhoto,photo,setImageSrc,imageSrc,setStream ,stream} = useContextStream();
  useEffect(()=>{
   
    return(()=>{
      if(!activeStream) return
      if(stream) cleaStream(stream)
      setImageSrc(null)
    })
  },[activeStream])
 

  

  useEffect(()=>{
   
   
    const handlePhoto =async()=>{
      try{
        if(urLink=='')return
       if(!photo) return
        await axios.post(`${backend}/${urLink}`,photo)
        await Swal.fire({
        icon:'success',
        title:'foto enviada',
        timer:500,
        showConfirmButton:true
       })
      }catch(err){
       if(err instanceof AxiosError){
        await Swal.fire({
          icon:'error',
          title:'erro ao  enviar foto',
          text:err.response?.data,
          //timer:900,
          showConfirmButton:true
         })
       }else{
        await Swal.fire({
          icon:'error',
          title:'erro ao  enviar foto',
          text:'erro ao enviar imagem',
          timer:900,
          showConfirmButton:true
         })
        }
       }
      }
      handlePhoto()
  },[])
 
 
 
 
 

const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.height = 400;
      canvas.width = 400;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(videoRef.current, 0, 0, 400, 400);
     
      canvas.toBlob(async (blob:Blob|null) => {
        if(!blob) return
         const formData = new FormData();
        formData.append('photo', blob, 'foto.png'); 
        console.log(formData)
        setPhoto(formData);
        console.log(formData)
        const temporaryUrl = URL.createObjectURL(blob);
        setImageSrc(temporaryUrl)
        
       
      })
     
     
      }
  };
    return(
        <>
        <div className={style.take_photo_container}>
        <div className={style.play}>
          {
           !imageSrc  &&  <video ref={videoRef} autoPlay />
          }
          {
           imageSrc && <Image src={imageSrc}  width={395} height={300} alt='' />
          }
          <div>
            {!imageSrc &&
            <>
            <button
            className={style.streamButton}
              onClick={() => {
                takePhoto();
                if(stream) cleaStream(stream)
                setDisplay(false)
                
                
               
              }}
            >
              Tirar Foto
            </button>
            <button
            className={style.streamButtonAbort}
              onClick={() => {
                setDisplay(false)
                setActiveStream(false)
                if(stream) cleaStream(stream)
              }}
            >
              cancelar
            </button>
            </> 
           }
           {imageSrc && 
           <>
            <button
              className={style.NewStreamButton}
              onClick={async() => {
                setImageSrc(null)
               const stream = await mediaDevices()
                console.log(stream?.id)
                if(stream){
                  setStream(stream)
                  setActiveStream(true)
                }
               
                
              }}>
                tira outra foto
            </button>
            <button
            className={style.streamButtonAbort}
              onClick={() => {
               if(stream) {
                 cleaStream(stream)
                  setActiveStream(false)
                  setDisplay(false)
                }
              }}
            >
             cancelar
            </button>
            <button
            className={style.streamButtonSend}
              onClick={() => {
                setDisplay(false)
                setActiveStream(false)
                
              }}
            >
              ok
            </button>
           
            </>
           }
          </div>
        </div>
      </div>
        
        </>
    )
}