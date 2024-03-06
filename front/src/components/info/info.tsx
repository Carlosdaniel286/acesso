import Form from "@/components/Form/form";
import { useEffect, useState } from "react";
import { card } from "@/app/types/cards";
import { addressValue } from "@/app/types/inputs";

import { useContextHiddent } from "@/context/hiddeNav";
import style from "./style/info.module.css";
import IconeUser from "@/components/icones/iconeUser";
import IconeID from "@/components/icones/iconeID";
import IconeDrive from "@/components/icones/iconeDrive";
import IconeCod from "@/components/icones/iconeCod";
import IconeAttend from "@/components/icones/iconeAttend";
import IconeLocal from "@/components/icones/iconeLocal";
//import { newExitVistor } from "../vitors/CardEnterVistor/helpers/outSideVistor/outsideVistor";
import ShowAddress from "../vitors/getAddressVistor/getAddress";

export default function Info({ cards }: card) {
  const [renderAddAddres, setRenderAddAddress] = useState(false);
  const [renderAddress, setRenderAddress] = useState(false);
  const [controll, setControll] = useState<"Exit" | "Enter">("Enter");

  const setDisplayAddAddress = () => {
    setRenderAddAddress(!renderAddAddres);
  };
  const handleAddress = () => {
    setRenderAddress(!renderAddress);
  };

  return (
    <>
      <div className={style.Infomation}>
        <div className={style.p_Infomation}>
          <div className={style.iconesInfo}>
            {" "}
            <IconeUser /> {cards.name}
          </div>
          <div className={style.iconesInfo}>
            {" "}
            <IconeID /> {cards.cpf}
          </div>
        </div>
        <div className={style.p_Infomation}>
          <div className={style.iconesInfo}>
            <IconeDrive /> {cards.license}
          </div>
          <div id={style.cod_p}>
            <div className={style.iconesInfo}>
              <IconeCod /> {cards.id}
            </div>
          </div>
        </div>
        <span>atendente</span>
        <div className={style.p_Infomation}>
          <div className={style.iconesInfo}>
            {" "}
            <IconeAttend /> {cards.user.name}
          </div>
        </div>

        <div className={style.clickRenderAddress}>
          <IconeLocal setRenderAddress={handleAddress} />

          {renderAddress && (
            <>
              <ShowAddress id={cards.id} handlerOverlay={handleAddress} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
