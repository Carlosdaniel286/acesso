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
            src="/mais.png"
            height={50}
            width={50}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => setHiddeNav({ ...hiddeNav, modal: !hiddeNav.modal })}
          />
        </div>
      </div>
    </>
  );
};
