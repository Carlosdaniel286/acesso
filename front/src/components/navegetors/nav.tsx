/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";
import nav from "./style/nav.module.css";
import Overlay from "../overlay/hidden";
import VisitaCadastros from "../vitors/creatVistors/creatVistors";
import { useEffect, useState } from "react";
import Filtro from "../vitors/filtroVistors/filtro";
//import RenderInside from "./components/vistors/entersVistors/main";
import RenderEveryVistor from "./everyVistors/main";
import { useContextStream } from "@/context/mediaDevices/mediaDevices";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const { setImageSrc} = useContextStream();
  return (
    <nav className={nav.nav}>
      {hidden && (
        <Overlay
          handleOverlayVisibility={"default"}
          children={
            <div className={nav.limit}>
              <VisitaCadastros setHidden={setHidden} />
            </div>
          }
        />
      )}
      <ul>
        <Filtro />
        <li
          onClick={() => {
            setImageSrc(null)
            setHidden(!hidden);

          }}
        >
          cadastro de visitantes
        </li>

        <RenderEveryVistor />
        <li>saidas</li>
      </ul>
    </nav>
  );
}
