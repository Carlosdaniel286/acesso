"use client";
import on from "../style/style.module.css";
import { ShowModal } from "@/components/modal/showModal";
import { Modal } from "@/components/modal/modal";
import Seach from "@/components/serach/search";
import { useContextHiddent } from "@/context/hiddeNav";
import Filtro from "@/components/vitors/filtroVistors/filtro";
import { useEffect, useRef, useState } from "react";
type Means = {
  children: React.ReactNode;
};

export default function Mean({ children }: Means) {
  const { hiddeNav } = useContextHiddent();
  const [filter, setFilter] = useState<boolean>(false);

  const Css = (): React.CSSProperties => {
    if (filter)
      return {
        background: "rgba(99, 97, 94, 0.7)",
        padding: `${6}px`,
        left: `${2}%`,
      };
    return {
      background: "none",
      left: `${0}%`,
      top: `${-4}px`,
      padding: `${0}px`,
    };
  };

  return (
    <div className={on.body}>
      <header className={on.header}>
        <div className={on.ClikModal}>
          <ShowModal />
          {hiddeNav.modal && (
            <div className={on.contentModal}>
              <Modal />
            </div>
          )}
        </div>
        <div className={on.seach}>
           <Seach />
        </div>
        
      </header>
      <main  className={on.main}>
        {children}
      </main>
    </div>
  );
}
