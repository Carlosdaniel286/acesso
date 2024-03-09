/* eslint-disable react/no-children-prop */
import Overlay from "@/components/overlay/hidden";
import style from "../style/addAddress.module.css";
import { InputAdressMain } from "@/components/inputs/inputadress/mainAddress";
import { addressValue } from "@/types/inputs";
import ButtonOut from "./buttonOut/buttonOut";

type AddAddressProps = {
  getValueOfAddress: (value: addressValue[]) => void;
  setDisplayAddAddress: () => void;
  handleNewEnter: () => void;
};

export default function AddAddress({
  getValueOfAddress,
  setDisplayAddAddress,
  handleNewEnter,
}: AddAddressProps) {
 
  return (
    <>
      <div className={style.addAdressOverlay}>
        <Overlay handleOverlayVisibility={() => {}}>
          <div className={style.content_card_Add_Address}>
            <ButtonOut DisplayAddAdress={setDisplayAddAddress} />
            <h2>cadastro de endereço</h2>
            <div className={style.content_address_Scroll}>
              <InputAdressMain setValueOfAddress={getValueOfAddress} />
            </div>
            <div className={style.AddAddress_button}>
              <button
                onClick={() => {
                 setDisplayAddAddress();
                 handleNewEnter();
                }}
              >
                confirmar
              </button>
            </div>
          </div>
        </Overlay>
      </div>
    </>
  );
}
