import { useContextStream } from "@/app/sistema/context/mediaDevices/mediaDevices";
import { useEffect, useState } from "react";
import style from "../../style/addPicture.module.css";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import dontev from 'dotenv'
import Swal from "sweetalert2";
//import { headers } from "next/headers";
dontev.config()


const backend = process.env.NEXT_PUBLIC_URL_BASE as string

export default function RenderPhoto(){
  const [photo, setPhoto] = useState<FormData | null>(null);
  const {setActiveStream,videoRef,activeStream } = useContextStream();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
 useEffect(() => {
    setActiveStream(true)
    return (()=>{
      setActiveStream(false)
    })
  }, []);

  useEffect(()=>{
    if(!photo) return
   
    const handlePhoto =async()=>{
      try{
       
      
         await axios.post(`${backend}/photo`,photo)
      
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
  },[photo])
 
 
 
 
 

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
        setPhoto(formData);
        const temporaryUrl = URL.createObjectURL(blob);
        setImageSrc(temporaryUrl)
      })
    
      setActiveStream(false)
      }
  };
    return(
        <>
        <div className={style.take_photo_container}>
        <div className={style.play}>
          {
            activeStream && <video ref={videoRef} autoPlay />
          }
          {
            imageSrc && !activeStream && <Image src={imageSrc}  width={395} height={300} alt='' />
          }
          <div>
            {activeStream && 
            <button
            className={style.streamButton}
              onClick={() => {
                takePhoto();
              }}
            >
              Tirar Foto
            </button>
           }
           {!activeStream && 
            <button
              className={style.NewStreamButton}
              onClick={() => {setActiveStream(true)}}>
                tira outra foto
            </button>
           }
          </div>
        </div>
      </div>
        
        </>
    )
}