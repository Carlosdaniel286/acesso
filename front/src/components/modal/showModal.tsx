"use client";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import Image from "next/image";
import style from "./style/modal.module.css";
import { useContextHiddent } from "@/context/hiddeNav";

export const ShowModal = () => {
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  return (
    <>
      <div className={style.bodyModalShow}>
        <div className={style.imgShow}>
          <Image
            id={style.Image}
            src="/mais.png"
            height={45}
            width={45}
            alt=""
            style={{ cursor: "pointer",borderRadius:'5px'}}
            onClick={() => setHiddeNav({ ...hiddeNav, modal: !hiddeNav.modal })}
          />
        </div>
      </div>
    </>
  );
};
