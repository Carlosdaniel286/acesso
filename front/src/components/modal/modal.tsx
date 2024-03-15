/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
"use client";
///import { } from "react";
import style from "./style/modal.module.css";
import Nav from "@/components/navegetors/nav";
import { useContextHiddent } from "@/context/hiddeNav";
import Dashboard from "../dashboard/dashboard";

export const Modal = () => {
  const { setHiddeNav, hiddeNav } = useContextHiddent();

  return (
    <>
      <div className={style.bodyModal}>
        <div className={style.Navs}>
          <div className={style.hiddenNav}
            onClick={() => setHiddeNav({ ...hiddeNav, modal: !hiddeNav.modal })}
          >
            X
          </div>
         <Dashboard/>
        </div>
      </div>
      <div
        className={style.hiddenModal}
        onClick={() => {
          setHiddeNav({ ...hiddeNav, modal: !hiddeNav.modal });
        }}
      ></div>
    </>
  );
};
