import style from './style/ImageAdd.module.css'
import { RenderComponents } from "../types/dashboardRender";
import Image from "next/image";

export default function DashboardAddVisitor({renderComponents}:RenderComponents){
  return(
    <li
    onClick={() => {
        renderComponents()
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
  )

}