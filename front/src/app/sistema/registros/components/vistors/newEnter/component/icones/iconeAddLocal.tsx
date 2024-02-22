import Image from "next/image";
import style from './style/icones.module.css'
type local ={
    setRenderAddAddress:(()=>void)
}


export default function IconeAddLocal({setRenderAddAddress}:local) {
    return(
      <div className={style.button}>
     <Image
       src={"/addLocal.png"}
       alt="Descrição da imagem"
       width={60}
       height={60}
       style={{ borderRadius: "50%" }}
      onClick={() => {
        setRenderAddAddress()
        }}
/>

</div>
    )
}
