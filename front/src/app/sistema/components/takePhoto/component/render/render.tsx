import { useContextStream } from "@/app/sistema/context/mediaDevices/mediaDevices";
import { useEffect, useState } from "react";
import style from "../../style/addPicture.module.css";
import Image from "next/image";

export default function RenderPhoto(){
    const [photo, setPhoto] = useState<string | null>(null);
  const {stream ,setActiveStream,videoRef,activeStream } = useContextStream();
 useEffect(() => {
    setActiveStream(true)
    return (()=>{
      setActiveStream(false)
    })
  }, []);

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.height = 400;
      canvas.width = 400;
      canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0, 400, 400);
      const photo = canvas.toDataURL("image/png");
      setPhoto(photo);
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
            photo && !activeStream && <Image src={photo} width={395} height={300} alt='' />
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