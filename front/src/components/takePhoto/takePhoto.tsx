"use client";
import { useEffect, useRef, useState } from "react";
import style from "./style/addPicture.module.css";
import Overlay from "../overlay/hidden";
import { useContextStream } from "@/context/mediaDevices/mediaDevices";
import RenderPhoto from "./render/render";
import Loading from "@/components/loading/loading";


export type renderTakePhoto = {
  setDisplay: (ev: boolean) => void;
 
};

export default function TakePhoto({ setDisplay}: renderTakePhoto) {
  const { stream, imageSrc} = useContextStream();

 
  return (
    <>
      <Overlay
        children={
          <div className={style.containerRenderPhoto} >
            {typeof imageSrc=="string" ||  stream?.active ? (
              <RenderPhoto setDisplay={setDisplay}  />
            ) : (
              <Loading />
            )}
          </div>
        }
        handleOverlayVisibility={() => {
          setDisplay(false);
        }}
      />
    </>
  );
}
