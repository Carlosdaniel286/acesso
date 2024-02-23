/* eslint-disable react/no-children-prop */
import Overlay from "@/app/sistema/components/overlay/hidden";
import style from '../../style/enter.module.css'
import { InputAdressMain } from "@/app/sistema/components/inputs/inputadress/mainAddress";
import { addressValue } from "@/app/types/inputs";
import { Dispatch, SetStateAction } from "react";

type AddAddressProps = {
  getValueOfAddress: (value: addressValue[]) => void;
  setDisplayAddAddress: () => void;
   handleNewEnter:(()=>void)
  
};

export default function AddAddress({
  getValueOfAddress,
  setDisplayAddAddress,
  handleNewEnter
}: AddAddressProps) {
 
 return (
    <>
      <div className={style.addAdressOverlay}>
        <Overlay 
         handleOverlayVisibility={(()=>{})}
        >
          <div className={style.address_color}>
            <div className={style.content_address}>
              <InputAdressMain setValueOfAddress={getValueOfAddress} />
            </div>
            <div className={style.AddAddress_button}>
              <button onClick={() => {setDisplayAddAddress(); handleNewEnter();}}>confirmar</button>
              <div className={style.buttonOut}>
                <button onClick={() => {setDisplayAddAddress();}}>Sair</button>
              </div>
            </div>
          </div>
        </Overlay>
      </div>
    </>
  );
}
