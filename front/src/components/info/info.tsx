import {  useState } from "react";
import { card } from "@/types/cards";
import style from "./style/info.module.css";
import IconeUser from "@/components/icones/iconeUser";
import IconeID from "@/components/icones/iconeID";
import IconeDrive from "@/components/icones/iconeDrive";
import IconeCod from "@/components/icones/iconeCod";
import IconeAttend from "@/components/icones/iconeAttend";
import IconeLocal from "@/components/icones/iconeLocal";
import Image from "next/image";
import ShowAddress from "../vitors/getAddressVistor/getAddress";
import ImageFull from "../imageFull/imageFull";


export default function Info({ cards }: card) {
  const [renderAddress, setRenderAddress] = useState(false);
  const handleAddress = () => {
    setRenderAddress(!renderAddress);
  };
  const [renderFullImage, setRenderFullImage] = useState(false);

  
  
  
  return (
    <div className={style.container_info} >
      {renderFullImage &&  
      <>
       <ImageFull
         src={cards.image==''?'/user.jpg': cards.image}
        displayImage={(()=>{
          setRenderFullImage(!renderFullImage)
        })}
       
       />
      
      </>
      }
      <div className={style.container_image} >
         <div className={style.image}  >
          <Image
          id={style.images}
           width={200}
           height={200}
           src={cards.image==''?'/user.jpg': cards.image}
           alt=""
           onClick={(()=>{
            setRenderFullImage(!renderFullImage)
           })}
          />
       
        </div> 
     </div>
      
      
      <div className={style.Infomation}>
       <div className={style.p_Infomation}>
            <div className={style.iconesInfo}>
            {" "}
            <IconeUser /> {cards.name}
          </div>
          <div className={style.iconesInfo}>
            {" "}
            <IconeID /> {cards.cpf}
          </div>
        </div>
        <div className={style.p_Infomation}>
          <div className={style.iconesInfo}>
            <IconeDrive />{cards.license==''? <span style={{textTransform:'lowercase'}}>xxxxxxxxx</span>: cards.license}
          </div>
          <div id={style.cod_p}>
            <div className={style.iconesInfo}>
              <IconeCod /> {cards.id}
            </div>
          </div>
        </div>
       
        <div className={style.p_Infomation}>
        <span className={style.span} >atendente</span>
          <div className={style.iconesInfo}>
            <IconeAttend /> {cards.user.name}
          </div>
        </div>
      </div>
      
      <div className={style.clickRenderAddress}>
          <IconeLocal setRenderAddress={handleAddress} />
             {renderAddress && (
            <>
              <ShowAddress id={cards.id} handlerOverlay={handleAddress} />
            </>
          )}
        </div>
    </div>
  );
}
