/* eslint-disable react/no-children-prop */
import Overlay from "@/app/sistema/components/overlay/hidden";
import style from '../style/enter.module.css';
import { InputAdressMain } from "@/app/sistema/components/inputs/inputadress/mainAddress";
import { addressValue } from "@/app/types/inputs";
import { Dispatch, SetStateAction } from "react";

type AddAddress = {
  getValueOfAddress: (value: addressValue[]) => void;
  setValue: (value: boolean) => void
  setValueOfAddresClone: Dispatch<SetStateAction<addressValue[]>>
  valueOfAddress: addressValue[]
  valueOfAddressClone: addressValue[]
}
export default function AddAddres({ getValueOfAddress ,setValue,setValueOfAddresClone,valueOfAddressClone ,valueOfAddress}: AddAddress) {
  const clonesAddres =()=>{
    const concatenatedArray = valueOfAddressClone.concat(valueOfAddress);
     setValueOfAddresClone([...concatenatedArray])
  }

 return (
    <>
      <div className={style.addAdressOverlay}>
        <Overlay>
          <div className={style.adress_color}>
            <div className={style.conent_address}>
              <InputAdressMain setValueOfAddress={getValueOfAddress} />
             </div>
            <div className={style.AddAddres_button}>
                <button onClick={() => {setValue(false),clonesAddres()}} >adiconar</button>
                 <div className={style.buttonOut}>
                 <button  onClick={() => {setValue(false)}} >sair</button>
                 </div>
                
             </div>
          </div>
        </Overlay>
       
      </div>
    </>
  );
}
