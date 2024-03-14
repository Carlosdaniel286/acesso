import style from "./style/dashboard.module.css";
import Image from "next/image";
import Filtro from "../vitors/filtroVistors/filtro";
import { useState } from "react";
import { useContextHiddent } from "@/context/hiddeNav";

export default function Dashboard() {
   const { setHiddeNav, hiddeNav } = useContextHiddent();
  const [hidden, setHidden] = useState({
    filter: false,
    vistor: false,
  });

  return (
   
    <div className={style.dashboard}>
     
<ul>
        <li
          onClick={() => {
            setHidden({ ...hidden, vistor: !hidden.vistor });
            
          }}
        >
          <div className={style.dashboard_containerImage}>
            <Image
              id={style.dashboardImage}
              src={"/useradd.png"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <h3>criar</h3>
        </li>
        <li
          onClick={() => {
            setHidden({ ...hidden, filter: !hidden.filter });
          }}
        >
          <div className={style.filter}>
            <Filtro displayOptions={hidden.filter} />
          </div>
          <h3>filtro</h3>
        </li>
      </ul>
    </div>
  );
}
