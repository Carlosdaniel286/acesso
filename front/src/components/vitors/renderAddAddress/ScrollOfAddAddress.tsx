import { useContextHiddent } from "@/context/hiddeNav";
import { addressValue } from "@/types/inputs";
import {  useState } from "react";
import style from "./style/addAddress.module.css";
import { EnterVistor } from "../CardVistorDetails/helpers/inSideVistor/EnterVisitor";
import AddAddress from "./addAdress/addAdress";
import { project } from "@/types/form";


type SetAddressOfVistor = {
  cards: project;
  Display: () => void;
};

export default function ScrollOfAddAddress({
  cards,
  Display,
}: SetAddressOfVistor) {
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([
    {
      lt: "",
      qd: "",
    },
  ]);
  const getValueOfAddress = (value: addressValue[]) => {
    setValueOfAddress(value);
    
  };
return (
    <>
      <div className={style.conent_address}>
        <AddAddress
          getValueOfAddress={getValueOfAddress}
          setDisplayAddAddress={Display}
          
          handleNewEnter={() => {
             EnterVistor({
             valueOfAddress,
              cards,
              setHiddeNav,
              hiddeNav,
            });
          }}
        />
      </div>
    </>
  );
}

