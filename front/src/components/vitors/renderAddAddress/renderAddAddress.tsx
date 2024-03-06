import { useContextHiddent } from "@/context/hiddeNav";
import { addressValue } from "@/app/types/inputs";
import { useState } from "react";
import style from "./addAdress/styles/info.module.css";
import { EnterVistor } from "../CardVistorDetails/helpers/inSideVistor/EnterVisitor";
import AddAddress from "./addAdress/addAdress";
import { project } from "@/app/types/form";

type SetAddressOfVistor = {
  cards: project;
  getAdress: (value: addressValue[]) => void;
  Display: () => void;
};

export default function SetAddressOfVistor({
  cards,
  getAdress,
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
    getAdress(value);
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
