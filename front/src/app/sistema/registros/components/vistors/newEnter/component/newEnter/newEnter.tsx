/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-children-prop */
"use client";
import style from "../../style/enter.module.css";
import Cadastros from "@/app/sistema/components/Form/cadastros";
import { useEffect, useState } from "react";
import { card } from "@/app/types/cards";
import { addressValue } from "@/app/types/inputs";
import Address from "../addAdress/addAdress";
import { ConnectSoket } from "@/app/sistema/context/socket";
import RenderAddress from "../RenderAddress/getAddress";
import {useContextHiddent} from "@/app/sistema/context/hiddeNav";
import IconeUser from "../icones/iconeUser";
import IconeDrive from "../icones/iconeDrive";
import IconeID from "../icones/iconeID";
import IconeCod from "../icones/iconeCod";
import IconeLocal from "../icones/iconeLocal";
import IconeAddLocal from "../icones/iconeAddLocal";

type newEnters = {
  address: addressValue[];
  visitorId: number;
};

export default function NewEntry({ cards }: card) {
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  const { socket } = ConnectSoket();
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([
    {
      lt: "",
      qd: "",
    },
  ]);
  const [valueOfAddressClone, setValueOfAddresClone] = useState<addressValue[]>(
    [
      {
        lt: "",
        qd: "",
      },
    ]
  );
  const [renderAddAddres, setRenderAddAddress] = useState(false);
  const [renderAddress, setRenderAddress] = useState(false);
  

  const newEnter = () => {
    const newVisitor: newEnters = {
      address: valueOfAddressClone,
      visitorId: cards.id,
    };
    socket?.emit("visitorsEnter", newVisitor);
    setHiddeNav({ ...hiddeNav, overflow: false });
  };

  const getValueOfAddress = (value: addressValue[]) => {
    setValueOfAddress(value);
  };

  const setValue = () => {
    setRenderAddAddress(!renderAddAddres);
  };
  const handleAddress = () => {
    setRenderAddress(!renderAddress);
  };

  return (
    <div className={style.bodyEnter}>
      {renderAddAddres && (
        <div className={style.conent_address}>
          <Address
            getValueOfAddress={getValueOfAddress}
            setValue={setValue}
            setValueOfAddresClone={setValueOfAddresClone}
            valueOfAddressClone={valueOfAddressClone}
            valueOfAddress={valueOfAddress}
          />
        </div>
      )}
      <div className={style.move}>
        <Cadastros
          children={
            <div className={style.Infomation}>
              <div className={style.p_Infomation}>
                <p> <IconeUser/> {cards.name}</p>
                <p> <IconeID/> {cards.cpf}</p>
              </div>

              <div className={style.p_Infomation}>
                <p><IconeDrive/> {cards.license}</p>
                <div id={style.cod_p}>
                  <p><IconeCod/> {cards.id}</p>
                </div>
              </div>

              <div className={style.clickRenderAddress }>
               <IconeLocal
               setRenderAddress={handleAddress}
               />
              <IconeAddLocal
               setRenderAddAddress={setValue}
              />
                {renderAddress && (
                  <>
                    <RenderAddress
                      id={cards.id}
                      handlerOverlay={handleAddress}
                    />
                  </>
                )}
                
              </div>
               {valueOfAddressClone[0].lt!=='' && <>
              <div className={style.container_NewAddress}>
                 {valueOfAddressClone.map((item, id) => (
                    <div className={style.maps} key={id}>
                      {item.qd !== "" && item.lt !== "" && (
                        <div className={style.limit_map}>
                          <p className={style.qd} key={id}>qd: {item.qd}</p>
                          <p key={id + 1}>lt: {item.lt}</p>
                          <p></p>
                        </div>
                      )}
                    </div>
                  ))}
                
                </div>
                </>
                }
            </div>
          }
          Onclik={newEnter}
          header="cadastro de visitantes"
          SelectButton="4"
        />
      </div>
    </div>
  );
}
