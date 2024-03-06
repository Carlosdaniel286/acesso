import Image from "next/image";
import style from './style/icones.module.css'
type local ={
    setRenderAddress:(()=>void)
}

export default function IconeLocal({setRenderAddress}:local) {
    return(
      <div className={style.continer_RenderAddress}>
     <Image
       src={"/local.png"}
       alt="Descrição da imagem"
       width={60}
       height={60}
       style={{ borderRadius: "50%" }}
      onClick={() => {
        setRenderAddress()
        }}
/>

</div>
    )
}
