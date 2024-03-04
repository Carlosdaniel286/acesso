import Cadastros from "@/app/sistema/components/Form/cadastros";
import { useEffect, useState } from "react";
import { card } from "@/app/types/cards";
import { addressValue } from "@/app/types/inputs";
import { ConnectSoket } from "@/app/sistema/context/socket";
import {useContextHiddent} from "@/app/sistema/context/hiddeNav";
import style from './style/info.module.css'
import IconeUser from "../../../icones/iconeUser";
import IconeID from "../../../icones/iconeID";
import IconeDrive from "../../../icones/iconeDrive";
import IconeCod from "../../../icones/iconeCod";
import IconeAttend from "../../../icones/iconeAttend";
import IconeLocal from "../../../icones/iconeLocal";
import { newExitVistor } from "../../helper/outSideVistor/outsideVistor";
import RenderAddress from "../../../RenderAddress/getAddress";


export default function Info({ cards }: card){
    const { setHiddeNav, hiddeNav } = useContextHiddent();
    const { socket } = ConnectSoket();
    const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([
      {
        lt: "",
        qd: "",
      },
    ]);
    const [renderAddAddres, setRenderAddAddress] = useState(false);
    const [renderAddress, setRenderAddress] = useState(false);
    const [controll, setControll] = useState<'Exit'|'Enter'>(cards.controll);

    
      const setDisplayAddAddress = () => {
        setRenderAddAddress(!renderAddAddres);
      };
      const handleAddress = () => {
        setRenderAddress(!renderAddress);
      };
    
     
    return(
        <>
          <div className={style.Infomation}>
              <div className={style.p_Infomation}>
                <div className={style.iconesInfo}> <IconeUser/> {cards.name}</div>
                <div className={style.iconesInfo}> <IconeID/> {cards.cpf}</div>
              </div>
              <div className={style.p_Infomation}>
              <div className={style.iconesInfo}><IconeDrive/> {cards.license}</div>
                   <div id={style.cod_p}>
                   <div className={style.iconesInfo}><IconeCod/> {cards.id}</div>
                  </div>
              </div>
               <span>atendente</span>
              <div className={style.p_Infomation}>
              <div className={style.iconesInfo}> <IconeAttend/> {cards.User.name}</div>
              </div>

              <div className={style.clickRenderAddress }>
               <IconeLocal
               setRenderAddress={handleAddress}
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
              
            </div>
        
        </>
    )
}