import Form from "@/components/Form/form";
import { useEffect, useState } from "react";
import { card } from "@/app/types/cards";
import { addressValue } from "@/app/types/inputs";
import { useContextHiddent } from "@/context/hiddeNav";
import Info from "../../info/info";
import { newExitVistor } from "./helpers/outSideVistor/outsideVistor";
import SetAddressOfVistor from "../renderAddAddress/renderAddAddress";
import Loading from "@/components/loading/loading";
import { ConnectSoket } from "@/context/socket";
import style from './style/info.module.css'
import { useCache } from "@/context/cache/cache";
export type newEnters = {
  address: addressValue[];
  visitorId: number;
};
type controll={
  id:number,
  controll:'Exit'|'Enter'|''
}

export default function NewEntry({ cards }: card) {
  const { setHiddeNav, hiddeNav } = useContextHiddent();
  const {socket}= ConnectSoket()
  const [valueOfAddress, setValueOfAddress] = useState<addressValue[]>([
    {
      lt: "",
      qd: "",
    },
  ]);
  const [renderAddAddres, setRenderAddAddress] = useState(false);
  const{controll,setControll}=useCache()
  const getCahe =(controll:string)=>{
       if (!socket) return;
       socket.emit('caches',{id:cards.id,controll})
       socket.on(cards.id.toString(),(state: string) => {
        if (state == "Enter" || state == "Exit" || state=='' ) {
           console.log(state)
           setControll(state);
         }
       });
       
    }
  
  const setDisplayAddAddress = () => {
    setRenderAddAddress(!renderAddAddres);
  };

  const setAddAddress = (value: addressValue[]) => {
    setValueOfAddress(value);
  };

  const handleExitVistor = async () => {
   
    if (controll === "Exit") {
     await newExitVistor({cards, setHiddeNav, hiddeNav });
    
    }
    if (controll === "Enter") {
      setDisplayAddAddress();
     
    }
  };
  useEffect(() => {
 if (!socket) return;
 socket.emit('caches',{id:cards.id,controll:""})
 socket.on(cards.id.toString(),(state: string) => {
 if (state == "Enter" || state == "Exit" || state=='' ) {
       console.log(state)
        setControll(state);
      }
    });
  }, []);
  
  return (
    <>
      {controll ? (
        <div className={style.bodyEnter}>
          {renderAddAddres && (
            <SetAddressOfVistor
              cards={cards}
              getAdress={setAddAddress}
              Display={(()=>{
                getCahe('Exit')
                setDisplayAddAddress()
              })}
            />
          )}

          <div className={style.move}>
            <Form
              children={
                <>
                  <Info cards={cards} />
                </>
              }
              Onclik={() => {
               getCahe("Enter")
               handleExitVistor();
               
              }}
              header="cadastro de visitantes"
              SelectButton={controll}
            />
          </div>
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
}



