import Image from "next/image";
import style from './style/icones.module.css'
export default function IconeID() {
   return(
    <div className={style.icone}>
      <Image
      alt=""
      width={30}
      height={30}
      src='/id.png'
      
      />

    </div>
   )
}