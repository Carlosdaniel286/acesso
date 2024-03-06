"use client";
import { useEffect, useRef, useState } from "react";
import style from "./style/addPicture.module.css";
import Overlay from "../overlay/hidden";
import { useContextStream } from "@/context/mediaDevices/mediaDevices";
import RenderPhoto from "./render/render";
import Loading from "@/components/loading/loading";
import { cleaStream } from "./render/helpers/cleanStream/cleanStream";

export type renderTakePhoto = {
  setDisplay: (ev: boolean) => void;
  urLink: string;
};

export default function TakePhoto({ setDisplay, urLink }: renderTakePhoto) {
  const { stream, setActiveStream,activeStream} = useContextStream();

  useEffect(() => {
   setActiveStream(true);

    return () => {
      //if(stream) cleaStream(stream)
      setActiveStream(false);
    };
  }, []);
  return (
    <>
      <Overlay
        children={
          <>
            {stream?.active ? (
              <RenderPhoto setDisplay={setDisplay} urLink={urLink} />
            ) : (
              <Loading />
            )}
          </>
        }
        handleOverlayVisibility={() => {
          setDisplay(false);
        }}
      />
    </>
  );
}
