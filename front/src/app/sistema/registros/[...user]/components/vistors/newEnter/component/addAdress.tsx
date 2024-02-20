/* eslint-disable react/no-children-prop */
import Overlay from "@/app/sistema/components/overlay/hidden";
import style from '../style/enter.module.css';
import { InputAdressMain } from "@/app/sistema/components/inputs/inputadress/mainAddress";
import { addressValue } from "@/app/types/inputs";
import { Dispatch, SetStateAction } from "react";

type AddAddressProps = {
  getValueOfAddress: (value: addressValue[]) => void;
  setValue: (value: boolean) => void;
  setValueOfAddresClone: Dispatch<SetStateAction<addressValue[]>>;
  valueOfAddress: addressValue[];
  valueOfAddressClone: addressValue[];
};

export default function AddAddress({
  getValueOfAddress,
  setValue,
  setValueOfAddresClone,
  valueOfAddressClone,
  valueOfAddress
}: AddAddressProps) {
 
 
  const clonesAddress = () => {
    if(valueOfAddressClone[0].qd==''){
      setValueOfAddresClone([...valueOfAddress])
    }else{
      const concatenatedArray = valueOfAddressClone.concat(valueOfAddress)
      setValueOfAddresClone([...concatenatedArray]);
    }
   
  };

  return (
    <>
      <div className={style.addAdressOverlay}>
        <Overlay 
         handleOverlayVisibility={(()=>{setValue(false)})}
        >
          <div className={style.address_color}>
            <div className={style.content_address}>
              <InputAdressMain setValueOfAddress={getValueOfAddress} />
            </div>
            <div className={style.AddAddress_button}>
              <button onClick={() => {setValue(false); clonesAddress();}}>Adicionar</button>
              <div className={style.buttonOut}>
                <button onClick={() => {setValue(false);}}>Sair</button>
              </div>
            </div>
          </div>
        </Overlay>
      </div>
    </>
  );
}
