"use client";
import { useEffect, useRef, useState } from "react";
import style from "./style/addPicture.module.css";
import Overlay from "@/app/sistema/components/overlay/hidden";
import Image from "next/image";
import { useContextStream } from "../../context/mediaDevices/mediaDevices";
import RenderPhoto from "./component/render/render";
import Loading from "./component/loading/loading";


export default function TakePhoto() {
  const {stream ,setActiveStream} = useContextStream();
  useEffect(() => {
    setActiveStream(true)
    return (()=>{
      setActiveStream(false)
    })
  }, []);
  return (
    <>
    <Overlay 
     children={
      <>
      {stream?.active ? <RenderPhoto /> : <Loading />}
    
      </>
      }
     handleOverlayVisibility={'default'}
    />
    </>
  );
}
