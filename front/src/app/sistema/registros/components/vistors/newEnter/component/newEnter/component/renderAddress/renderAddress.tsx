import { useContextHiddent } from "@/app/sistema/context/hiddeNav";
import { ConnectSoket } from "@/app/sistema/context/socket";
import { addressValue } from "@/app/types/inputs";
import { useState } from "react";
import style from '../info/style/info.module.css'
import { newEnterVistor } from "../../helper/newEnterVistor/newEnterVisitor";
import RenderAddress from "../../../addAdress/addAdress";
import { project } from "@/app/types/form";

type SetAddressOfVistor ={
    cards:project,
    getAdress:((value: addressValue[])=>void)
    Display:(()=>void)
}



export default function SetAddressOfVistor({ cards,getAdress,Display}:SetAddressOfVistor){
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  const { socket } = ConnectSoket();
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([
    {
      lt: "",
      qd: "",
    },
  ]);
const getValueOfAddress = (value: addressValue[]) => {
    setValueOfAddress(value);
      getAdress(value)
  };

  
   return(
    <>
       <div className={style.conent_address}>
          <RenderAddress
            getValueOfAddress={getValueOfAddress}
            setDisplayAddAddress={Display}
            handleNewEnter={(()=>{
              newEnterVistor({socket,valueOfAddress,cards,setHiddeNav,hiddeNav})
             })} 
             />
        </div>
    </>
  )
}