import { useContextStream } from "@/context/mediaDevices/mediaDevices";
import { useEffect, useRef, useState } from "react";
import style from "../style/addPicture.module.css";
import Image from "next/image";
import { useCamera } from "@/hooks/takePhoto/takePhoto";
import { useMediaDevices } from "@/hooks/initVideo/stream";

export type renderTakePhoto = {
  setDisplay: (ev: boolean) => void;
};

export default function RenderPhoto({ setDisplay }: renderTakePhoto) {
  const { videoRef, setImageSrc, imageSrc } = useContextStream();
  const { initCamera, closeCamera } = useMediaDevices();
  const { takePhoto } = useCamera();

  const [dimison, setDimison] = useState({
    height: 0,
    width: 0,
  });
  const ImageRef = useRef<HTMLDivElement | null>(null);

  const dimisonOfImage = () => {
    if (ImageRef.current) {
      setDimison({
        ...dimison,
        height: ImageRef.current.scrollHeight,
        width: ImageRef.current.scrollWidth,
      });
    }
  };

  useEffect(() => {
    dimisonOfImage(); // Chamando a função inicialmente
    window.addEventListener("resize", dimisonOfImage); // Adicionando o listener de resize

    return () => {
      window.removeEventListener("resize", dimisonOfImage); // Removendo o listener quando o componente desmonta
    };
  }, [imageSrc, videoRef]);

  useEffect(() => {
    console.log(imageSrc);
  }, [imageSrc]);

  return (
    <>
      <div className={style.take_photo_container}>
        <div className={style.play}>
          {!imageSrc && (
            <div className={style.video}>
              <video ref={videoRef} autoPlay />
            </div>
          )}

          {imageSrc && (
            <div ref={ImageRef} className={style.img}>
              <Image
                src={imageSrc}
                width={dimison.width}
                height={dimison.height}
                alt=""
              />
            </div>
          )}

          <div className={style.take_photo_containerButton}>
            {!imageSrc && (
              <>
                <button
                  className={style.streamButton}
                  onClick={() => {
                    takePhoto();
                    closeCamera();
                  }}
                >
                  Tirar Foto
                </button>
                <button
                  className={style.streamButtonAbort}
                  onClick={() => {
                    setDisplay(false);
                    closeCamera();
                    
                  }}
                >
                  cancelar
                </button>
              </>
            )}
            {imageSrc && (
              <>
                <button
                  className={style.NewStreamButton}
                  onClick={async () => {
                    await initCamera();
                    setImageSrc(null);
                   
                  }}
                >
                  tira outra foto
                </button>
                <button
                  className={style.streamButtonAbort}
                  onClick={() => {
                    closeCamera();
                    setDisplay(false);
                  }}
                >
                  cancelar
                </button>
                <button
                  className={style.streamButtonSend}
                  onClick={() => {
                    setDisplay(false);
                   
                  }}
                >
                  ok
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
