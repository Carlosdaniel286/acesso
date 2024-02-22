/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-children-prop */
"use client";
import Link from "next/link";
import nav from "./style/nav.module.css";
import Overlay from "../overlay/hidden";
import VisitaCadastros from "./components/cadastros/form";
import { useEffect, useState } from "react";
import Filtro from "./components/filtro/filtro";
import RenderInside from "./components/vistors/entersVistors/main";
import RenderEveryVistor from "./components/vistors/everyVistors/main";

export default function Nav() {
  const [hidden, setHidden] = useState(false);

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
            setHidden(!hidden);
          }}
        >
          cadastro de visitantes
        </li>
        <RenderInside />
        <RenderEveryVistor />
        <li>saidas</li>
      </ul>
    </nav>
  );
}
